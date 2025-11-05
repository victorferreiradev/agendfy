// Importa ícones da biblioteca lucide-react para usar na navegação
import { Home, Calendar, Users, BarChart3, MessageSquare, Settings } from "lucide-react";

// Importa o componente NavLink do react-router-dom para criar links de navegação
// NavLink é especial porque pode detectar quando a rota está ativa
import { NavLink } from "react-router-dom";

// Importa a função cn (class names) da biblioteca de utilitários
// cn ajuda a combinar classes CSS condicionalmente
import { cn } from "@/lib/utils";

// Define um array com os itens de navegação da sidebar
// Cada item tem: nome, href (URL) e ícone
const navigation = [
  { name: "Início", href: "/dashboard", icon: Home },
  { name: "Agendamentos", href: "/appointments", icon: Calendar },
  { name: "Clientes", href: "/clients", icon: Users },
  { name: "Relatórios", href: "/reports", icon: BarChart3 },
  { name: "WhatsApp", href: "/whatsapp", icon: MessageSquare },
  { name: "Configurações", href: "/settings", icon: Settings },
];

// Exporta o componente funcional Sidebar
export function Sidebar() {
  // Retorna o JSX do componente
  return (
    // Elemento aside (semântico para conteúdo complementar)
    // Sidebar fixa na lateral esquerda com altura total da tela
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* 
        fixed: posicionamento fixo na tela
        left-0 top-0: posiciona no canto superior esquerdo
        h-screen: altura de 100% da viewport
        w-64: largura de 16rem (256px)
        bg-sidebar: cor de fundo customizada para sidebar
        border-r: borda direita
        border-sidebar-border: cor da borda customizada
        flex flex-col: layout flex em coluna (vertical)
      */}

      {/* Cabeçalho da sidebar com logo e slogan */}
      <div className="p-6">
        {/* 
          p-6: padding de 1.5rem (24px) em todos os lados
        */}
        <h1 className="text-2xl font-bold text-sidebar-foreground">
          Agendify
        </h1>
        {/* 
          text-2xl: tamanho grande de texto
          font-bold: peso negrito
          text-sidebar-foreground: cor do texto customizada para sidebar
        */}
        <p className="text-sm text-sidebar-foreground/60 mt-1">
          Gestão Inteligente
        </p>
        {/* 
          text-sm: texto pequeno
          text-sidebar-foreground/60: cor do texto com 60% de opacidade
          mt-1: margin-top de 0.25rem (4px)
        */}
      </div>

      {/* Área de navegação principal - ocupa o espaço restante */}
      <nav className="flex-1 px-3 space-y-1">
        {/* 
          flex-1: ocupa todo o espaço disponível restante
          px-3: padding horizontal de 0.75rem (12px)
          space-y-1: espaçamento vertical de 0.25rem entre os itens
        */}

        {/* Mapeia o array de navegação para criar os links */}
        {navigation.map((item) => (
          // NavLink para cada item de navegação
          <NavLink
            key={item.name} // Chave única para React
            to={item.href}  // URL para onde o link aponta
            // className recebe uma função que retorna as classes baseadas no estado ativo
            className={({ isActive }) =>
              cn(
                // Classes base que sempre são aplicadas
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                // Condicional: se a rota está ativa
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary" // Estilo ativo
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground" // Estilo normal + hover
                /* 
                  Estilo ativo:
                  - bg-sidebar-accent: fundo destacado
                  - text-sidebar-primary: cor primária do texto

                  Estilo normal:
                  - text-sidebar-foreground/70: texto com 70% de opacidade
                  - hover:bg-sidebar-accent/50: fundo semi-transparente ao passar mouse
                  - hover:text-sidebar-foreground: texto com opacidade total ao passar mouse
                */
              )
            }
          >
            {/* Renderiza o ícone do item */}
            <item.icon className="w-5 h-5" />
            {/* 
              item.icon: componente de ícone dinâmico
              w-5 h-5: tamanho 1.25rem (20px)
            */}
            
            {/* Texto do item de navegação */}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Rodapé da sidebar com informações do usuário */}
      <div className="p-4 border-t border-sidebar-border">
        {/* 
          p-4: padding de 1rem (16px)
          border-t: borda superior
          border-sidebar-border: cor da borda customizada
        */}
        <div className="flex items-center gap-3 px-3 py-2">
          {/* 
            flex items-center: alinha itens verticalmente ao centro
            gap-3: espaçamento de 0.75rem entre os itens
            px-3 py-2: padding interno
          */}
          
          {/* Avatar do usuário (círculo com inicial) */}
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
            A
            {/* 
              w-8 h-8: tamanho 2rem (32px)
              rounded-full: círculo perfeito
              bg-primary: cor de fundo primária
              flex items-center justify-center: centraliza o conteúdo
              text-primary-foreground: cor do texto sobre fundo primário
              font-semibold: peso semi-negrito
            */}
          </div>
          
          {/* Informações do usuário */}
          <div className="flex-1 min-w-0">
            {/* 
              flex-1: ocupa espaço disponível
              min-w-0: permite que o texto seja truncado
            */}
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              Admin User
              {/* 
                text-sm: texto pequeno
                font-medium: peso médio
                text-sidebar-foreground: cor do texto
                truncate: corta texto com ellipsis se muito longo
              */}
            </p>
            <p className="text-xs text-sidebar-foreground/60 truncate">
              admin@agendify.com
              {/* 
                text-xs: texto extra pequeno
                text-sidebar-foreground/60: cor com 60% de opacidade
                truncate: corta texto com ellipsis
              */}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}