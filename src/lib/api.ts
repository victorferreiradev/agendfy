// src/lib/api.ts
// Arquivo de utilitários para fazer requisições HTTP para a API

// Exporta a URL base da API
// Usa import.meta.env para variáveis de ambiente do Vite
// Se VITE_API_URL não existir, usa localhost como fallback
export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

/**
 * Faz fetch para a API adicionando automaticamente Authorization se token existir.
 * @param path - caminho iniciando com '/'
 * @param options - RequestInit
 */
// Exporta função assíncrona para fazer requisições à API
export async function apiFetch(path: string, options: RequestInit = {}) {
  // Busca o token JWT do localStorage
  // O token é armazenado quando o usuário faz login
  const token = localStorage.getItem("token");

  // Cria objeto de headers para a requisição
  // Inicia com Content-Type: application/json como padrão
  const headers: Record<string, string> = {
    "Content-Type": "application/json", // Indica que estamos enviando/recebendo JSON
    // Espalha os headers existentes das options, se houver
    // Converte para Record<string, string> ou usa objeto vazio se não existir
    ...(options.headers as Record<string,string> || {}),
  };

  // Se existe um token, adiciona header de Authorization
  if (token) headers["Authorization"] = `Bearer ${token}`;
  // Formato: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

  // Faz a requisição fetch combinando a URL base com o path
  const res = await fetch(`${API_URL}${path}`, {
    // Espalha as options originais (method, body, etc.)
    ...options,
    // Substitui os headers pelas versões mescladas (nossos headers + headers originais)
    headers,
  });

  // Lê a resposta como texto primeiro (mais seguro que .json() direto)
  // Isso evita erros se a resposta não for JSON válido
  const text = await res.text();
  
  // Tenta converter o texto para JSON
  let data;
  try { 
    // Se text não é vazio, tenta fazer parse como JSON
    data = text ? JSON.parse(text) : null; 
  } catch { 
    // Se falhar o parse JSON, usa o texto original
    data = text; 
  }

  // Verifica se a resposta não foi bem-sucedida (status fora do range 200-299)
  if (!res.ok) {
    // Cria um novo erro com mensagem descritiva
    // Tenta usar data.error, depois data.message, depois res.statusText
    const err = new Error(data?.error || data?.message || res.statusText);
    
    // Adiciona propriedades extras ao erro para debug
    (err as any).status = res.status; // Status HTTP (ex: 400, 401, 500)
    (err as any).body = data; // Corpo da resposta (pode ser objeto JSON ou string)
    
    // Lança o erro para ser capturado por quem chamou a função
    throw err;
  }

  // Se a resposta foi bem-sucedida, retorna os dados parseados
  return data;
}