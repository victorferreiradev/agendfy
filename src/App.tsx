// Importa o componente Toaster da biblioteca de componentes UI personalizada
// Toaster é usado para exibir notificações/toasts na aplicação
import { Toaster } from "@/components/ui/toaster";

// Importa outro componente Toaster, mas com alias "Sonner" para evitar conflito de nomes
// Provavelmente é uma implementação diferente ou versão alternativa de toasts
import { Toaster as Sonner } from "@/components/ui/sonner";

// Importa o Provider do sistema de Tooltips
// TooltipProvider permite que componentes de tooltip funcionem em toda a aplicação
import { TooltipProvider } from "@/components/ui/tooltip";

// Importa as dependências do TanStack Query (anteriormente React Query)
// QueryClient: gerencia o cache e estado das queries
// QueryClientProvider: componente que fornece o QueryClient para a aplicação
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Importa componentes de roteamento do React Router
// BrowserRouter: componente que habilita o roteamento baseado em URL
// Routes: container para todas as rotas da aplicação
// Route: define uma rota individual com path e elemento
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa todos os componentes de página da aplicação
// Cada um representa uma rota diferente do sistema
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import Clients from "./pages/Clients";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import WhatsApp from "./pages/WhatsApp";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Cria uma nova instância do QueryClient
// QueryClient é o coração do TanStack Query - gerencia:
// - Cache de dados
// - Estado das queries (loading, error, success)
// - Refetching e invalidação de dados
// - Configurações globais
const queryClient = new QueryClient();

// Define o componente principal da aplicação como uma arrow function
// Usando parênteses para retorno implícito de JSX
const App = () => (
  // QueryClientProvider envolve toda a aplicação para fornecer o cliente de queries
  // Todas as queries do TanStack Query dentro desta árvore terão acesso ao queryClient
  <QueryClientProvider client={queryClient}>
    {/* 
      client={queryClient}: passa a instância do QueryClient como prop
    */}

    {/* TooltipProvider fornece contexto para todos os tooltips da aplicação */}
    <TooltipProvider>
      {/* 
        Permite que componentes Tooltip funcionem em qualquer lugar da app
        Sem este provider, os tooltips não funcionariam corretamente
      */}

      {/* Componente Toaster para exibir notificações */}
      <Toaster />
      {/* 
        Renderiza o container onde os toasts serão exibidos
        Normalmente posicionado em um canto da tela
      */}

      {/* Componente Sonner (segundo sistema de toasts) */}
      <Sonner />
      {/* 
        Pode ser usado para um tipo diferente de notificação
        Ou como fallback/alternativa ao primeiro Toaster
      */}

      {/* BrowserRouter habilita o roteamento baseado em URL */}
      <BrowserRouter>
        {/* 
          BrowserRouter usa a History API do navegador para gerenciar URLs
          Permite navegação sem recarregar a página (Single Page Application)
        */}

        {/* Container para definir todas as rotas da aplicação */}
        <Routes>
          {/* 
            Routes é responsável por renderizar apenas a rota que corresponde ao URL atual
          */}

          {/* Rota para a página inicial/landing page */}
          <Route path="/" element={<Landing />} />
          {/* 
            path="/": corresponde à URL raiz (ex: https://site.com/)
            element={<Landing />}: renderiza o componente Landing quando a rota é acessada
          */}

          {/* Rota para a página de login */}
          <Route path="/login" element={<Login />} />
          {/* 
            path="/login": corresponde à URL /login
            element={<Login />}: renderiza o componente Login
          */}

          {/* Rota para o dashboard principal */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Rota para a página de agendamentos */}
          <Route path="/appointments" element={<Appointments />} />

          {/* Rota para a página de clientes */}
          <Route path="/clients" element={<Clients />} />

          {/* Rota para a página de relatórios */}
          <Route path="/reports" element={<Reports />} />

          {/* Rota para a página de configurações */}
          <Route path="/settings" element={<Settings />} />

          {/* Rota para a página de integração WhatsApp */}
          <Route path="/whatsapp" element={<WhatsApp />} />

          {/* Rota curinga para páginas não encontradas (404) */}
          <Route path="*" element={<NotFound />} />
          {/* 
            path="*": corresponde a QUALQUER URL que não foi definida acima
            element={<NotFound />}: renderiza a página 404 para URLs desconhecidas
            SEMPRE deve ser a última rota definida
          */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Exporta o componente App como padrão
// Este é o ponto de entrada principal da aplicação React
export default App;