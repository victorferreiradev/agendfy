// Importa o tipo LucideIcon da biblioteca lucide-react
// LucideIcon é um tipo TypeScript que representa um componente de ícone
import { LucideIcon } from "lucide-react";

// Importa o componente Card da pasta de componentes da aplicação
// @/ é um alias que normalmente aponta para a pasta src/components
import { Card } from "@/components/ui/card";

// Define uma interface TypeScript para as propriedades do componente StatsCard
// Interface descreve a estrutura dos dados que o componente recebe
interface StatsCardProps {
  title: string;          // Título do card (ex: "Agendamentos Hoje")
  value: string;          // Valor principal (ex: "15")
  change?: string;        // Texto de variação (opcional) (ex: "+10%")
  icon: LucideIcon;       // Componente de ícone do Lucide
  trend?: "up" | "down";  // Tendência (opcional) - indica se é positiva ou negativa
}

// Exporta o componente funcional StatsCard
// Recebe as propriedades definidas na interface via destructuring
export function StatsCard({ title, value, change, icon: Icon, trend }: StatsCardProps) {
  // Retorna o JSX do componente
  return (
    // Componente Card com classes de estilização Tailwind CSS
    <Card className="p-6 shadow-card hover:shadow-elevated transition-shadow">
      {/* 
        p-6: padding de 1.5rem (24px)
        shadow-card: sombra customizada definida no tema
        hover:shadow-elevated: muda a sombra ao passar o mouse
        transition-shadow: transição suave para a animação da sombra
      */}
      
      {/* Container flex para alinhar conteúdo e ícone */}
      <div className="flex items-start justify-between">
        {/* Container principal do conteúdo (título, valor, change) */}
        <div className="flex-1">
          {/* Título do card - texto menor e cor secundária */}
          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>
          
          {/* Valor principal - texto grande e em negrito */}
          <h3 className="text-3xl font-bold text-foreground mt-2">
            {value}
          </h3>
          {/* 
            text-3xl: tamanho grande de texto (1.875rem / 30px)
            font-bold: peso da fonte negrito
            text-foreground: cor principal do texto
            mt-2: margin-top de 0.5rem (8px)
          */}
          
          {/* Renderização condicional do texto de variação */}
          {change && ( // Só renderiza se 'change' existir
            <p className={`text-sm mt-2 font-medium ${
              // Aplica cor baseada na tendência (trend)
              trend === "up" ? "text-accent" : "text-destructive"
            }`}>
              {change}
            </p>
            /* 
              text-sm: texto pequeno
              mt-2: margin-top de 0.5rem
              font-medium: peso de fonte médio
              Condicional: se trend for "up" usa cor de sucesso (accent), senão usa cor de erro (destructive)
            */
          )}
        </div>

        {/* Container do ícone */}
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          {/* 
            w-12 h-12: largura e altura de 3rem (48px)
            rounded-lg: bordas arredondadas
            bg-primary/10: cor de fundo com 10% de opacidade da cor primária
            flex items-center justify-center: centraliza o ícone vertical e horizontalmente
          */}
          
          {/* Renderiza o ícone passado como propriedade */}
          <Icon className="w-6 h-6 text-primary" />
          {/* 
            Icon: componente de ícone passado como prop (renomeado de 'icon' para 'Icon')
            w-6 h-6: tamanho do ícone 1.5rem (24px)
            text-primary: cor primária do ícone
          */}
        </div>
      </div>
    </Card>
  );
}