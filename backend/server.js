// backend/server.js
// Arquivo principal do servidor Express - ponto de entrada da aplicação

// Importa o framework Express para criar o servidor web
import express from "express";
// Importa o middleware CORS para permitir requisições de diferentes origens (domínios)
import cors from "cors";
// Importa dotenv para carregar variáveis de ambiente do arquivo .env
import dotenv from "dotenv";
// Importa as rotas de autenticação (login, registro)
import authRoutes from "./routes/auth.js";
// Importa as rotas do dashboard (estatísticas e relatórios)
import dashboardRoutes from "./routes/dashboard.js";
// Importa o middleware de autenticação JWT
import { authenticateToken } from "./middleware/authMiddleware.js";
// Importa as rotas de serviços (CRUD de serviços)
import servicosRoutes from "./routes/servicos.js";

// Carrega as variáveis de ambiente do arquivo .env para process.env
// Exemplo: JWT_SECRET, DATABASE_URL, etc.
dotenv.config();

// Cria uma instância do aplicativo Express
const app = express();

// Configura o middleware CORS para permitir requisições de diferentes origens
// ⚠️ Em produção, deve-se configurar origens específicas em vez de permitir todas
app.use(cors()); // habilita CORS para desenvolvimento (ajuste em produção)

// Configura o middleware para parsing automático de JSON no corpo das requisições
// Converte automaticamente req.body de JSON para objeto JavaScript
app.use(express.json());

// =============================================================================
// CONFIGURAÇÃO DAS ROTAS DA APLICAÇÃO
// =============================================================================

// Define as rotas de autenticação no prefixo /api
// Exemplo: POST /api/register, POST /api/login
app.use("/api", authRoutes);

// Define as rotas de serviços no prefixo /api/servicos
// Exemplo: GET /api/servicos, POST /api/servicos
app.use("/api/servicos", servicosRoutes);

// Define as rotas do dashboard no prefixo /api
// Exemplo: GET /api/dashboard
app.use("/api", dashboardRoutes);

// ✅ Rotas de autenticação (linha redundante - já configurada acima)
// Esta linha está duplicada, mas não causa erro
app.use("/api", authRoutes);

// =============================================================================
// ROTAS ESPECIAIS E HEALTH CHECK
// =============================================================================

// Rota de health check - para verificar se a API está funcionando
// Útil para monitoramento e load balancers
app.get("/health", (req, res) => res.json({ ok: true }));
// Resposta: { "ok": true }

// Rota protegida para obter informações do usuário autenticado
// Requer token JWT válido no header Authorization
app.get("/api/me", authenticateToken, (req, res) => {
  // Se o middleware authenticateToken passou, req.user contém os dados decodificados do token
  // Retorna uma mensagem com o email do usuário autenticado
  res.json({ message: `Usuário autenticado: ${req.user.email}` });
  // Exemplo de resposta: 
  // { "message": "Usuário autenticado: joao@email.com" }
});

// =============================================================================
// INICIALIZAÇÃO DO SERVIDOR
// =============================================================================

// Define a porta do servidor:
// - Usa a porta da variável de ambiente PORT (ex: em produção no Heroku, Railway)
// - Se não existir, usa a porta 3000 como fallback (desenvolvimento local)
const port = process.env.PORT || 3000;

// Inicia o servidor na porta especificada
app.listen(port, () => console.log(`API rodando em http://localhost:${port}`));
// Esta mensagem é exibida no terminal quando o servidor inicia com sucesso