// backend/routes/dashboard.js
// Importa o framework Express para criar rotas
import express from "express";
// Importa o cliente do Supabase para conexão com o banco de dados
import { supabase } from "../supabaseClient.js";
// Importa o middleware de autenticação para proteger a rota
import { authenticateToken } from "../middleware/authMiddleware.js";

// Cria um objeto router do Express para definir rotas
const router = express.Router();

// GET /api/dashboard
// Define rota GET para o dashboard, protegida pelo middleware de autenticação
// authenticateToken: verifica se o token JWT é válido antes de executar a função
router.get("/dashboard", authenticateToken, async (req, res) => {
  try {
    // Extrai o ID do usuário do objeto req.user (adicionado pelo middleware de autenticação)
    // O middleware authenticateToken decodifica o token JWT e adiciona os dados no req.user
    const userId = req.user.userId;

    // CONSULTA 1: Total de agendamentos para hoje
    // Busca a quantidade exata de agendamentos do usuário para a data atual
    const { count: total_today } = await supabase
      .from("agendamentos")  // Seleciona a tabela 'agendamentos'
      .select("*", { 
        count: "exact",      // Solicita contagem exata de registros
        head: true           // Não retorna os dados, apenas a contagem (mais eficiente)
      })
      .eq("user_id", userId) // Filtra pelo ID do usuário logado
      .gte("appointment_date", new Date().toISOString().slice(0, 10)) // Data maior ou igual a hoje
      // new Date().toISOString() retorna: "2024-01-15T10:30:00.000Z"
      // .slice(0, 10) pega apenas a parte da data: "2024-01-15"
      .lt("appointment_date", new Date(new Date().setDate(new Date().getDate()+1)).toISOString().slice(0,10));
      // Data menor que amanhã (fim do intervalo de hoje)
      // new Date().setDate(new Date().getDate()+1) - adiciona 1 dia à data atual
      // Isso cria um intervalo de 24 horas para o dia atual

    // CONSULTA 2: Total de agendamentos do mês atual
    const { data: monthData, error: errMonth, count: total_month } = await supabase
      .from("agendamentos")  // Tabela agendamentos
      .select("*", { 
        count: "exact",      // Contagem exata
        head: true           // Apenas contagem, sem dados
      })
      .eq("user_id", userId) // Apenas agendamentos do usuário logado
      .gte("appointment_date", new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString())
      // Data maior ou igual ao primeiro dia do mês atual
      // new Date(new Date().getFullYear(), new Date().getMonth(), 1)
      // - getFullYear(): ano atual (ex: 2024)
      // - getMonth(): mês atual (0-11, onde 0 = Janeiro)
      // - 1: primeiro dia do mês
      // Exemplo: new Date(2024, 0, 1) = 1º de Janeiro de 2024
      .lt("appointment_date", new Date(new Date().getFullYear(), new Date().getMonth()+1, 1).toISOString());
      // Data menor que o primeiro dia do próximo mês
      // Isso cria um intervalo que cobre todo o mês atual

    // CONSULTA 3: Total de atendimentos concluídos
    const { data: atendimentos, error: errAt, count: total_atendimentos } = await supabase
      .from("agendamentos")  // Tabela agendamentos
      .select("*", { 
        count: "exact",      // Contagem exata
        head: true           // Apenas contagem, sem dados
      })
      .eq("user_id", userId)         // Apenas do usuário logado
      .eq("status", "concluido");    // Apenas agendamentos com status "concluido"

    // Retorna os dados consolidados do dashboard em formato JSON
    res.json({
      total_agendamentos_dia: total_today || 0,        // Total de hoje ou 0 se null
      total_agendamentos_mes: total_month || 0,        // Total do mês ou 0 se null
      total_atendimentos: total_atendimentos || 0,     // Total concluído ou 0 se null
    });
    
  } catch (err) {
    // Captura qualquer erro que ocorra no bloco try
    console.error(err); // Log do erro no console para debugging
    
    // Retorna erro 500 (Internal Server Error) para o cliente
    res.status(500).json({ error: "Erro interno" });
  }
});

// Exporta o router para ser usado em outros arquivos
export default router;