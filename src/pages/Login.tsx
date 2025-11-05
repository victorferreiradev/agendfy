// Importa React e o hook useState para gerenciar estado no componente
import React, { useState } from "react";
// Importa o hook useNavigate para navegação programática entre rotas
import { useNavigate } from "react-router-dom";
// Importa a URL base da API do arquivo de configuração
import { API_URL } from "@/lib/api";
// Importa componentes de UI personalizados
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
// Importa o hook de autenticação personalizado
import { useAuth } from "@/hooks/useAuth";

// Exporta o componente funcional Login como padrão
export default function Login() {
  // Estado para armazenar o email digitado pelo usuário
  const [email, setEmail] = useState("");
  // Estado para armazenar a senha digitada pelo usuário
  const [password, setPassword] = useState("");
  // Estado para controlar o carregamento durante a submissão do formulário
  const [loading, setLoading] = useState(false);
  
  // Hook para navegação programática - permite redirecionar o usuário
  const navigate = useNavigate();
  
  // Hook de autenticação - extrai a função setToken para armazenar o token JWT
  const { setToken } = useAuth();

  // Função assíncrona para lidar com o envio do formulário de login
  async function handleSubmit(e: React.FormEvent) {
    // Previne o comportamento padrão do formulário (recarregar a página)
    e.preventDefault();
    
    // Ativa o estado de carregamento (mostra feedback visual para o usuário)
    setLoading(true);
    
    // Bloco try-catch para lidar com possíveis erros na requisição
    try {
      // Faz uma requisição POST para o endpoint de login da API
      const res = await fetch(`${API_URL}/login`, {
        method: "POST", // Método HTTP POST
        headers: { "Content-Type": "application/json" }, // Define que estamos enviando JSON
        body: JSON.stringify({ email, password }), // Converte email e senha para JSON
      });
      
      // Converte a resposta da API para JSON
      const data = await res.json();
      
      // Verifica se a resposta não foi bem-sucedida (status fora de 200-299)
      if (!res.ok) {
        // Mostra alerta com erro da API ou mensagem genérica
        alert(data.error || data.message || "Erro no login");
        return; // Para a execução da função
      }
      
      // Se o login foi bem-sucedido, salva o token JWT usando o hook de autenticação
      // O hook useAuth se encarrega de salvar no localStorage e atualizar o estado
      setToken(data.token);
      
      // Redireciona o usuário para a página do dashboard após login bem-sucedido
      navigate("/dashboard");
      
    } catch (err) {
      // Captura erros de rede ou outros erros não tratados
      alert("Erro ao conectar com API");
      console.error(err); // Log do erro no console para debugging
    } finally {
      // Bloco finally sempre executa, independente de sucesso ou erro
      // Desativa o estado de carregamento (remove feedback visual)
      setLoading(false);
    }
  }

  // Retorna o JSX (estrutura visual) do componente
  return (
    // Container principal que ocupa toda a altura da tela
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      {/* 
        min-h-screen: altura mínima de 100% da viewport
        flex: ativa layout flexbox
        items-center: centraliza verticalmente
        justify-center: centraliza horizontalmente
        bg-background: cor de fundo do tema
        p-4: padding em todos os lados
      */}
      
      {/* Card que contém o formulário de login */}
      <Card className="w-full max-w-md p-6 shadow-elevated">
        {/* 
          w-full: largura total do container pai
          max-w-md: largura máxima de 28rem (448px)
          p-6: padding interno de 1.5rem (24px)
          shadow-elevated: sombra personalizada elevada
        */}
        
        {/* Cabeçalho do card com título e descrição */}
        <div className="text-center mb-6">
          {/* Título da página */}
          <h1 className="text-2xl font-bold text-foreground">Login</h1>
          {/* 
            text-2xl: tamanho grande de texto
            font-bold: peso negrito
            text-foreground: cor principal do texto
          */}
          
          {/* Descrição/subtítulo */}
          <p className="text-muted-foreground mt-2">
            Acesse sua conta AgendFy
            {/* 
              text-muted-foreground: cor de texto secundária
              mt-2: margin-top de 0.5rem (8px)
            */}
          </p>
        </div>
        
        {/* Formulário de login - onSubmit chama handleSubmit quando enviado */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 
            onSubmit: evento disparado quando o formulário é submetido
            space-y-4: espaçamento vertical de 1rem entre os elementos filhos
          */}
          
          {/* Container do campo de email */}
          <div className="space-y-2">
            {/* 
              space-y-2: espaçamento vertical de 0.5rem entre label e input (se houver)
            */}
            
            {/* Input de email */}
            <Input 
              value={email} // Valor controlado pelo estado
              onChange={e => setEmail(e.target.value)} // Atualiza estado quando usuário digita
              placeholder="Email" // Texto placeholder
              type="email" // Tipo de input para validação de email
              className="w-full" // Ocupa 100% da largura
              required // Campo obrigatório
            />
          </div>
          
          {/* Container do campo de senha */}
          <div className="space-y-2">
            {/* Input de senha */}
            <Input 
              value={password} // Valor controlado pelo estado
              onChange={e => setPassword(e.target.value)} // Atualiza estado quando usuário digita
              placeholder="Senha" // Texto placeholder
              type="password" // Tipo password (oculta caracteres)
              className="w-full" // Ocupa 100% da largura
              required // Campo obrigatório
            />
          </div>
          
          {/* Botão de submit do formulário */}
          <Button 
            type="submit" // Tipo submit para enviar o formulário
            className="w-full gradient-primary" // Ocupa 100% da largura com gradiente
            disabled={loading} // Desabilita o botão durante o carregamento
          >
            {/* Texto condicional do botão baseado no estado de loading */}
            {loading ? "Entrando..." : "Entrar"}
            {/* 
              Se loading é true: mostra "Entrando..."
              Se loading é false: mostra "Entrar"
            */}
          </Button>
        </form>
        
        {/* Rodapé do card com link para voltar ao início */}
        <div className="mt-6 text-center">
          {/* 
            mt-6: margin-top de 1.5rem (24px)
            text-center: centraliza o texto
          */}
          
          <p className="text-sm text-muted-foreground">
            {/* Texto informativo */}
            Não tem uma conta?{" "}
            {/* Botão para voltar à página inicial */}
            <button 
              onClick={() => navigate("/")} // Navega para a rota raiz quando clicado
              className="text-primary hover:underline" // Estilo de link
            >
              Voltar para o início
            </button>
          </p>
        </div>
      </Card>
    </div>
  );
}