// backend/routes/servicos.js
import express from "express";
import { supabase } from "../supabaseClient.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
import { sendSuccess, sendError } from "../utils/response.js";

const router = express.Router();

// Aplica auth a todas as rotas deste router
router.use(authenticateToken);

// GET /api/servicos -> lista serviços do usuário logado
router.get("/", async (req, res) => {
  try {
    const userId = req.user.userId;
    const { data, error } = await supabase
      .from("servicos")
      .select("*")
      .eq("user_id", userId);

    if (error) return sendError(res, "Erro ao buscar serviços", 500, error.message);
    return sendSuccess(res, data, "Serviços recuperados");
  } catch (err) {
    return sendError(res, "Erro interno", 500, err.message);
  }
});

// POST /api/servicos -> criar serviço
router.post("/", async (req, res) => {
  try {
    const userId = req.user.userId;
    const { nome, descricao, preco, duracao_minutos } = req.body;
    if (!nome) return sendError(res, "Campo 'nome' é obrigatório", 400);

    const { data, error } = await supabase
      .from("servicos")
      .insert([{ user_id: userId, nome, descricao, preco, duracao_minutos }])
      .select("*")
      .single();

    if (error) return sendError(res, "Erro ao criar serviço", 500, error.message);
    return sendSuccess(res, data, "Serviço criado");
  } catch (err) {
    return sendError(res, "Erro interno", 500, err.message);
  }
});

export default router;
