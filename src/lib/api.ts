// src/lib/api.ts
export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
/**
 * Faz fetch para a API adicionando automaticamente Authorization se token existir.
 * @param path - caminho iniciando com '/'
 * @param options - RequestInit
 */
export async function apiFetch(path: string, options: RequestInit = {}) {
  const token = localStorage.getItem("token");
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string,string> || {}),
  };

  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });

  const text = await res.text();
  let data;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }

  if (!res.ok) {
    // lança um erro com a resposta formatada
    const err = new Error(data?.error || data?.message || res.statusText);
    (err as any).status = res.status;
    (err as any).body = data;
    throw err;
  }
  return data;
}
