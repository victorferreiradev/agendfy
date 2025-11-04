// backend/routes/dashboard.js
import express from "express";
import { supabase } from "../supabaseClient.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET /api/dashboard
router.get("/dashboard", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;

    // total agendamentos hoje
    const { count: total_today } = await supabase
      .from("agendamentos")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId)
      .gte("appointment_date", new Date().toISOString().slice(0, 10))
      .lt("appointment_date", new Date(new Date().setDate(new Date().getDate()+1)).toISOString().slice(0,10));

    // total agendamentos mes
    const { data: monthData, error: errMonth, count: total_month } = await supabase
      .from("agendamentos")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId)
      .gte("appointment_date", new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString())
      .lt("appointment_date", new Date(new Date().getFullYear(), new Date().getMonth()+1, 1).toISOString());

    // total atendimentos (status = 'concluido')
    const { data: atendimentos, error: errAt, count: total_atendimentos } = await supabase
      .from("agendamentos")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId)
      .eq("status", "concluido");

    res.json({
      total_agendamentos_dia: total_today || 0,
      total_agendamentos_mes: total_month || 0,
      total_atendimentos: total_atendimentos || 0,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro interno" });
  }
});

export default router;
