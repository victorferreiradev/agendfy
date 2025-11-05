// backend/routes/servicos.js
// Arquivo de rotas para gerenciamento de serviços

// Importa o framework Express para criar rotas
import express from "express";
// Importa o cliente do Supabase para conexão com o banco de dados
import { supabase } from "../supabaseClient.js";
// Importa o middleware de autenticação para proteger as rotas
import { authenticateToken } from "../middleware/authMiddleware.js";
// Importa funções utilitárias para padronizar respostas da API
import { sendSuccess, sendError } from "../utils/response.js";

// Cria um objeto router do Express para definir rotas
const router = express.Router();

// Aplica auth a todas as rotas deste router
// O middleware authenticateToken será executado automaticamente em TODAS as rotas definidas abaixo
// Isso evita ter que colocar authenticateToken em cada rota individualmente
router.use(authenticateToken);

// GET /api/servicos -> lista serviços do usuário logado
// Rota para obter todos os serviços do usuário autenticado
router.get("/", async (req, res) => {
  try {
    // Extrai o ID do usuário do objeto req.user
    // O middleware authenticateToken decodificou o token JWT e adicionou os dados do usuário em req.user
    const userId = req.user.userId;
    
    // Consulta o banco de dados para buscar todos os serviços do usuário
    const { data, error } = await supabase
      .from("servicos")      // Seleciona a tabela 'servicos'
      .select("*")           // Seleciona todas as colunas
      .eq("user_id", userId); // Filtra apenas os serviços onde user_id = userId do usuário logado

    // Se houve erro na consulta ao banco de dados
    if (error) return sendError(res, "Erro ao buscar serviços", 500, error.message);
    
    // Se a consulta foi bem-sucedida, retorna os dados com formato padronizado
    return sendSuccess(res, data, "Serviços recuperados");
    
  } catch (err) {
    // Captura qualquer erro não tratado no bloco try
    return sendError(res, "Erro interno", 500, err.message);
  }
});

// POST /api/servicos -> criar serviço
// Rota para criar um novo serviço para o usuário autenticado
router.post("/", async (req, res) => {
  try {
    // Extrai o ID do usuário do token JWT
    const userId = req.user.userId;
    
    // Extrai os dados do corpo da requisição usando destructuring
    // Esses campos são enviados pelo frontend no formato JSON
    const { nome, descricao, preco, duracao_minutos } = req.body;
    
    // Validação: verifica se o campo obrigatório 'nome' foi fornecido
    if (!nome) return sendError(res, "Campo 'nome' é obrigatório", 400);

    // Insere o novo serviço no banco de dados
    const { data, error } = await supabase
      .from("servicos")      // Tabela servicos
      .insert([{             // Insere um array com um objeto (o novo serviço)
        user_id: userId,     // ID do usuário dono do serviço (do token JWT)
        nome,                // Nome do serviço (do body)
        descricao,           // Descrição do serviço (do body - opcional)
        preco,               // Preço do serviço (do body - opcional)
        duracao_minutos      // Duração em minutos (do body - opcional)
      }])
      .select("*")           // Retorna todas as colunas do registro inserido
      .single();             // Espera um único resultado (o serviço criado)

    // Se houve erro na inserção no banco de dados
    if (error) return sendError(res, "Erro ao criar serviço", 500, error.message);
    
    // Se a criação foi bem-sucedida, retorna o serviço criado
    return sendSuccess(res, data, "Serviço criado");
    
  } catch (err) {
    // Captura qualquer erro não tratado no bloco try
    return sendError(res, "Erro interno", 500, err.message);
  }
});

// Exporta o router para ser usado em outros arquivos
// Normalmente importado no arquivo principal da aplicação (app.js ou index.js)
export default router;