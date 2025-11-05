// src/hooks/useAuth.ts
// Arquivo que define um custom hook para gerenciar autenticação

// Importa os hooks useState e useEffect do React
// useState: para gerenciar estado local no componente
// useEffect: para executar efeitos colaterais (como manipular localStorage)
import { useState, useEffect } from "react";

// Exporta um custom hook chamado useAuth
// Custom hooks são funções que começam com "use" e podem usar outros hooks do React
export function useAuth() {
  // Cria um estado para armazenar o token de autenticação
  // useState recebe uma função como valor inicial (lazy initial state)
  // Esta função é executada apenas na inicialização do hook
  const [token, setToken] = useState<string | null>(
    // Função inicializadora que busca o token no localStorage
    () => localStorage.getItem("token")
    /* 
      localStorage.getItem("token") retorna:
      - string: se existir um token armazenado
      - null: se não existir token armazenado
    */
  );

  // useEffect hook para sincronizar o token com o localStorage
  // Executa sempre que o token mudar (dependência [token])
  useEffect(() => {
    // Se existe um token (não é null ou undefined)
    if (token) {
      // Armazena o token no localStorage
      // localStorage persiste dados mesmo após fechar o navegador
      localStorage.setItem("token", token);
    } else {
      // Se o token é null (logout), remove do localStorage
      localStorage.removeItem("token");
    }
    /* 
      Este efeito garante que:
      1. Quando token é definido → salva no localStorage
      2. Quando token é removido (null) → remove do localStorage
    */
  }, [token]); // Array de dependências: executa quando token muda

  // Função para fazer logout
  // Define o token como null, o que dispara o useEffect acima
  const logout = () => setToken(null);

  // Retorna um objeto com o token e funções para manipulá-lo
  return { 
    token,      // Token atual (string ou null)
    setToken,   // Função para atualizar o token
    logout      // Função para fazer logout
  };
}