// backend/supabaseClient.js
// Arquivo de configuração e inicialização do cliente Supabase
// Este arquivo cria e exporta uma instância do cliente Supabase para ser usada em toda a aplicação

// Importa a função createClient do pacote @supabase/supabase-js
// Esta função é usada para criar uma instância do cliente Supabase
import { createClient } from "@supabase/supabase-js";

// Importa dotenv para carregar variáveis de ambiente do arquivo .env
// As variáveis de ambiente contêm credenciais sensíveis que não devem ser hardcoded
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env para o process.env
// Isso permite acessar SUPABASE_URL e SUPABASE_ANON_KEY definidas no arquivo .env
dotenv.config();

// Armazena a URL do projeto Supabase a partir das variáveis de ambiente
// SUPABASE_URL é a URL única do seu projeto no Supabase
// Exemplo: "https://seu-projeto.supabase.co"
const EXPRESS_SUPABASE_URL = process.env.SUPABASE_URL;

// Armazena a chave anônima do Supabase a partir das variáveis de ambiente
// SUPABASE_ANON_KEY é a chave pública que permite acesso ao Supabase
// Esta chave é segura para usar no frontend, mas neste caso está no backend
const EXPRESS_SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

// Exibe informações de debug no console para verificar se as variáveis de ambiente foram carregadas corretamente
// Isso é útil durante o desenvolvimento para troubleshooting
console.log("DEBUG ENV:", {
  url: process.env.SUPABASE_URL,  // Mostra a URL (parcialmente por segurança)
  key: process.env.SUPABASE_ANON_KEY ? "OK" : "NOT FOUND", // Mostra se a chave existe sem revelar seu valor
});

// Exporta a instância do cliente Supabase criada
// Esta instância será importada e usada em outros arquivos para fazer operações no banco de dados
export const supabase = createClient(
  EXPRESS_SUPABASE_URL,        // Primeiro parâmetro: URL do projeto Supabase
  EXPRESS_SUPABASE_ANON_KEY    // Segundo parâmetro: Chave anônima para autenticação
);