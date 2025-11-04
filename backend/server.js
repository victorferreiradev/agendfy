// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import dashboardRoutes from "./routes/dashboard.js";
import { authenticateToken } from "./middleware/authMiddleware.js";
import servicosRoutes from "./routes/servicos.js";


dotenv.config();
const app = express();

app.use(cors()); // habilita CORS para desenvolvimento (ajuste em produção)
app.use(express.json());

// rotas
app.use("/api", authRoutes);
app.use("/api/servicos", servicosRoutes);
app.use("/api", dashboardRoutes);

// ✅ Rotas de autenticação
app.use("/api", authRoutes);

// health
app.get("/health", (req, res) => res.json({ ok: true }));


app.get("/api/me", authenticateToken, (req, res) => {
  res.json({ message: `Usuário autenticado: ${req.user.email}` });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API rodando em http://localhost:${port}`));
