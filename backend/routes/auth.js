import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { supabase } from "../supabaseClient.js";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// ROTA REGISTER CORRIGIDA
router.post("/register", async (req, res) => {
  const { name, email, password, company_name } = req.body;

  if (!name || !email || !password || !company_name) {
    return res.status(400).json({ 
      error: "Todos os campos são obrigatórios: nome, email, senha e nome da empresa" 
    });
  }

  try {
    const { data: existingUser, error: checkError } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error("Erro ao verificar email:", checkError);
    }

    if (existingUser) {
      return res.status(409).json({ error: "Email já cadastrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from("users")
      .insert([{ 
        name,
        company_name,
        email, 
        password_hash: hashedPassword
      }])
      .select("id, name, email, company_name")
      .single();

    if (error) {
      console.error("Erro ao inserir usuário no Supabase:", error);
      return res.status(500).json({ 
        error: "Erro ao registrar o usuário", 
        details: error.message 
      });
    }

    res.status(201).json({ 
      message: "Usuário registrado com sucesso", 
      user: data 
    });
  } catch (error) {
    console.error("Erro no registro:", error);
    res.status(500).json({ 
      error: "Erro ao registrar o usuário", 
      details: error.message 
    });
  }
});

// ROTA LOGIN (já corrigida anteriormente)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email e senha são obrigatórios" });
  }

  try {
    const { data: user, error } = await supabase
      .from("users")
      .select("id, name, email, password_hash")
      .eq("email", email)
      .single();

    if (error || !user) {
      return res.status(401).json({ error: "Email ou senha inválidos" });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ error: "Email ou senha inválidos" });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "8h",
    });

    res.json({
      message: "Login realizado com sucesso",
      token,
      user: { 
        id: user.id, 
        name: user.name, 
        email: user.email 
      },
    });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ error: "Erro ao fazer login" });
  }
});

export default router;