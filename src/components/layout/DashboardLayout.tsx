// Importa o tipo ReactNode da biblioteca React
// ReactNode é um tipo TypeScript que representa qualquer conteúdo que pode ser renderizado no React
// Inclui: strings, números, elementos JSX, arrays, fragments, etc.
import { ReactNode } from "react";

// Importa o componente Sidebar do arquivo Sidebar (provavelmente na mesma pasta)
// Este componente será usado como barra lateral fixa no layout
import { Sidebar } from "./Sidebar";

// Define uma interface TypeScript para as propriedades do componente DashboardLayout
// Interface descreve a estrutura dos dados que o componente recebe
interface DashboardLayoutProps {
  children: ReactNode;  // Prop children: conteúdo que será renderizado dentro do layout
  // ReactNode permite que o componente receba qualquer conteúdo React válido
}

// Exporta o componente funcional DashboardLayout
// Este componente cria um layout padrão para páginas do dashboard
export function DashboardLayout({ children }: DashboardLayoutProps) {
  // Retorna o JSX do componente
  return (
    // Container principal que ocupa toda a altura da tela
    <div className="min-h-screen bg-background">
      {/* 
        min-h-screen: altura mínima de 100vh (100% da altura da viewport)
        bg-background: cor de fundo definida pelo tema do sistema
      */}
      
      {/* Renderiza o componente Sidebar - barra lateral de navegação */}
      <Sidebar />
      {/* 
        O Sidebar é renderizado primeiro e provavelmente tem posição fixa
        Isso significa que ele ficará sempre visível na lateral esquerda
      */}
      
      {/* Área principal de conteúdo */}
      <main className="ml-64 p-8">
        {/* 
          ml-64: margin-left de 16rem (256px) - para dar espaço para a sidebar
          p-8: padding de 2rem (32px) em todos os lados - espaço interno ao redor do conteúdo
        */}
        
        {/* Renderiza o conteúdo children passado para o componente */}
        {children}
        {/* 
          children é o conteúdo específico de cada página que usa este layout
          Exemplo: se usarmos <DashboardLayout><h1>Meu Dashboard</h1></DashboardLayout>
          o <h1>Meu Dashboard</h1> será renderizado aqui
        */}
      </main>
    </div>
  );
}