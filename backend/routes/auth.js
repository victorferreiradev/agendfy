// Importa o framework Express para criar o servidor e rotas
import express from "express";
// Importa bcrypt para criptografar e comparar senhas
import bcrypt from "bcrypt";
// Importa jsonwebtoken para criar tokens de autenticação
import jwt from "jsonwebtoken";
// Importa a configuração do cliente Supabase (banco de dados)
import { supabase } from "../supabaseClient.js";

// Cria um objeto router do Express para definir rotas
const router = express.Router();
// Obtém a chave secreta JWT das variáveis de ambiente
const JWT_SECRET = process.env.JWT_SECRET;

// ROTA REGISTER CORRIGIDA
// Define rota POST para registro de novos usuários
router.post("/register", async (req, res) => {
  // Extrai os dados do corpo da requisição usando destructuring
  const { name, email, password, company_name } = req.body;

  // Valida se todos os campos obrigatórios foram fornecidos
  if (!name || !email || !password || !company_name) {
    // Retorna erro 400 (Bad Request) se algum campo estiver faltando
    return res.status(400).json({ 
      error: "Todos os campos são obrigatórios: nome, email, senha e nome da empresa" 
    });
  }

  // Inicia bloco try-catch para tratar erros assíncronos
  try {
    // Consulta o Supabase para verificar se o email já existe
    const { data: existingUser, error: checkError } = await supabase
      .from("users")          // Seleciona a tabela 'users'
      .select("id")           // Seleciona apenas a coluna 'id'
      .eq("email", email)     // Filtra onde email = email fornecido
      .single();              // Espera um único resultado (ou null)

    // Verifica se houve erro na consulta (excluindo erro "nenhum resultado")
    // PGRST116 é o código de erro do Supabase para "nenhuma linha retornada"
    if (checkError && checkError.code !== 'PGRST116') {
      console.error("Erro ao verificar email:", checkError);
    }

    // Se existingUser existe, significa que o email já está cadastrado
    if (existingUser) {
      // Retorna erro 409 (Conflict) - recurso já existe
      return res.status(409).json({ error: "Email já cadastrado" });
    }

    // Criptografa a senha usando bcrypt com 10 rounds de salt
    // Quanto maior o número, mais seguro porém mais lento
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insere o novo usuário no banco de dados
    const { data, error } = await supabase
      .from("users")          // Seleciona a tabela 'users'
      .insert([{              // Insere um array de objetos (um usuário)
        name,                 // Nome do usuário
        company_name,         // Nome da empresa
        email,                // Email do usuário
        password_hash: hashedPassword  // Senha criptografada
      }])
      .select("id, name, email, company_name")  // Retorna estas colunas após inserção
      .single();              // Espera um único resultado

    // Verifica se houve erro na inserção
    if (error) {
      console.error("Erro ao inserir usuário no Supabase:", error);
      // Retorna erro 500 (Internal Server Error)
      return res.status(500).json({ 
        error: "Erro ao registrar o usuário", 
        details: error.message  // Inclui detalhes do erro para debugging
      });
    }

    // Se chegou aqui, o usuário foi criado com sucesso
    // Retorna status 201 (Created) com mensagem e dados do usuário
    res.status(201).json({ 
      message: "Usuário registrado com sucesso", 
      user: data  // Retorna os dados do usuário criado (sem a senha)
    });
  } catch (error) {
    // Captura qualquer erro não tratado no bloco try
    console.error("Erro no registro:", error);
    res.status(500).json({ 
      error: "Erro ao registrar o usuário", 
      details: error.message 
    });
  }
});

// ROTA LOGIN (já corrigida anteriormente)
// Define rota POST para autenticação de usuários
router.post("/login", async (req, res) => {
  // Extrai email e senha do corpo da requisição
  const { email, password } = req.body;

  // Valida se email e senha foram fornecidos
  if (!email || !password) {
    return res.status(400).json({ error: "Email e senha são obrigatórios" });
  }

  try {
    // Busca usuário pelo email no banco de dados
    const { data: user, error } = await supabase
      .from("users")                              // Tabela users
      .select("id, name, email, password_hash")  // Seleciona colunas (incluindo hash da senha)
      .eq("email", email)                         // Filtra por email
      .single();                                  // Espera um único resultado

    // Se houve erro na consulta OU usuário não encontrado
    if (error || !user) {
      // Retorna erro 401 (Unauthorized) - credenciais inválidas
      return res.status(401).json({ error: "Email ou senha inválidos" });
    }

    // Compara a senha fornecida com o hash armazenado no banco
    const isMatch = await bcrypt.compare(password, user.password_hash);

    // Se as senhas não coincidem
    if (!isMatch) {
      return res.status(401).json({ error: "Email ou senha inválidos" });
    }

    // Se a senha está correta, cria um token JWT
    const token = jwt.sign(
      { userId: user.id },  // Payload: dados que serão armazenados no token
      JWT_SECRET,           // Chave secreta para assinar o token
      { expiresIn: "8h" }   // Opções: token expira em 8 horas
    );

    // Retorna sucesso com token e dados do usuário (sem a senha)
    res.json({
      message: "Login realizado com sucesso",
      token,  // Token JWT que o cliente usará em requisições futuras
      user: {  // Dados do usuário para o frontend
        id: user.id, 
        name: user.name, 
        email: user.email 
      },
    });
  } catch (error) {
    // Captura erros não tratados
    console.error("Erro no login:", error);
    res.status(500).json({ error: "Erro ao fazer login" });
  }
});

// Exporta o router para ser usado em outros arquivos
export default router;