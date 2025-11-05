// Importa o componente de layout do dashboard para a estrutura da página
import { DashboardLayout } from "@/components/layout/DashboardLayout";
// Importa componentes de UI personalizados
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Importa ícones da biblioteca Lucide React para usar nos relatórios
import { Download, TrendingUp, Users, Calendar, DollarSign } from "lucide-react";

// Exporta o componente funcional Reports como padrão
export default function Reports() {
  // Retorna o JSX do componente
  return (
    // Usa o layout do dashboard como wrapper
    <DashboardLayout>
      {/* Container principal com espaçamento vertical e animação de entrada */}
      <div className="space-y-8 animate-fade-in">
        {/* 
          space-y-8: espaçamento de 2rem (32px) entre elementos filhos
          animate-fade-in: animação personalizada de fade-in
        */}

        {/* Cabeçalho da página com título e botão de ação */}
        <div className="flex items-center justify-between">
          {/* Container do título e descrição */}
          <div>
            {/* Título principal da página */}
            <h1 className="text-3xl font-bold text-foreground">Relatórios</h1>
            {/* 
              text-3xl: tamanho grande de texto (1.875rem / 30px)
              font-bold: peso negrito
              text-foreground: cor principal do texto
            */}
            
            {/* Descrição/subtítulo */}
            <p className="text-muted-foreground mt-2">
              Análises e insights do seu negócio
              {/* 
                text-muted-foreground: cor de texto secundária
                mt-2: margin-top de 0.5rem (8px)
              */}
            </p>
          </div>
          
          {/* Botão para exportar relatórios */}
          <Button variant="outline">
            {/* Ícone de download */}
            <Download className="w-4 h-4 mr-2" />
            {/* 
              w-4 h-4: tamanho 1rem (16px)
              mr-2: margin-right de 0.5rem para espaçar do texto
            */}
            
            {/* Texto do botão */}
            Exportar
          </Button>
        </div>

        {/* Seção de Estatísticas Rápidas */}
        <div className="grid md:grid-cols-4 gap-6">
          {/* 
            grid: layout de grid CSS
            md:grid-cols-4: 4 colunas em tablets e desktop
            gap-6: espaçamento de 1.5rem entre os cards
          */}
          
          {/* Card 1: Agendamentos do Mês */}
          <Card className="p-6 shadow-card">
            {/* 
              p-6: padding interno de 1.5rem (24px)
              shadow-card: sombra personalizada para cards
            */}
            
            <div className="flex items-center gap-4">
              {/* 
                flex: layout flexbox
                items-center: alinha itens verticalmente ao centro
                gap-4: espaçamento de 1rem entre ícone e texto
              */}
              
              {/* Container do ícone com fundo colorido */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                {/* 
                  w-12 h-12: tamanho 3rem (48px)
                  rounded-lg: bordas arredondadas
                  bg-primary/10: fundo com cor primária em 10% de opacidade
                  flex items-center justify-center: centraliza o ícone
                */}
                
                {/* Ícone de calendário */}
                <Calendar className="w-6 h-6 text-primary" />
                {/* 
                  w-6 h-6: tamanho 1.5rem (24px)
                  text-primary: cor primária para o ícone
                */}
              </div>
              
              {/* Container do texto */}
              <div>
                {/* Label da métrica */}
                <p className="text-sm text-muted-foreground">Este Mês</p>
                {/* 
                  text-sm: texto pequeno
                  text-muted-foreground: cor secundária
                */}
                
                {/* Valor da métrica */}
                <p className="text-2xl font-bold text-foreground">342</p>
                {/* 
                  text-2xl: tamanho grande de texto (1.5rem / 24px)
                  font-bold: peso negrito
                  text-foreground: cor principal
                */}
              </div>
            </div>
          </Card>
          
          {/* Card 2: Novos Clientes */}
          <Card className="p-6 shadow-card">
            <div className="flex items-center gap-4">
              {/* Container do ícone com cor diferente (accent) */}
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                {/* Ícone de usuários */}
                <Users className="w-6 h-6 text-accent" />
                {/* 
                  bg-accent/10: fundo com cor de destaque (accent) em 10% de opacidade
                  text-accent: cor de destaque para o ícone
                */}
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Novos Clientes</p>
                <p className="text-2xl font-bold text-foreground">87</p>
              </div>
            </div>
          </Card>
          
          {/* Card 3: Taxa de Ocupação */}
          <Card className="p-6 shadow-card">
            <div className="flex items-center gap-4">
              {/* Container do ícone com cor primária */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                {/* Ícone de tendência/taxa */}
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Taxa Ocupação</p>
                <p className="text-2xl font-bold text-foreground">87%</p>
              </div>
            </div>
          </Card>
          
          {/* Card 4: Faturamento */}
          <Card className="p-6 shadow-card">
            <div className="flex items-center gap-4">
              {/* Container do ícone com cor de destaque */}
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                {/* Ícone de dólar (faturamento) */}
                <DollarSign className="w-6 h-6 text-accent" />
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Faturamento</p>
                <p className="text-2xl font-bold text-foreground">R$ 24.5k</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Seção de Gráficos - Placeholders */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* 
            grid: layout de grid CSS
            lg:grid-cols-2: 2 colunas em desktop
            gap-6: espaçamento de 1.5rem entre os gráficos
          */}
          
          {/* Card do Gráfico de Barras */}
          <Card className="p-6 shadow-card">
            {/* Título do gráfico */}
            <h2 className="text-xl font-semibold text-foreground mb-6">
              {/* 
                text-xl: tamanho grande de texto
                font-semibold: peso semi-negrito
                text-foreground: cor principal
                mb-6: margin-bottom de 1.5rem para espaçar do gráfico
              */}
              Agendamentos por Mês
            </h2>
            
            {/* Container placeholder do gráfico */}
            <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
              {/* 
                h-64: altura fixa de 16rem (256px)
                bg-muted/30: fundo com cor secundária em 30% de opacidade
                rounded-lg: bordas arredondadas
                flex items-center justify-center: centraliza o texto
              */}
              
              <p className="text-muted-foreground">Gráfico de Barras</p>
            </div>
          </Card>
          
          {/* Card do Gráfico de Pizza */}
          <Card className="p-6 shadow-card">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Serviços Mais Populares
            </h2>
            
            {/* Container placeholder do gráfico */}
            <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Gráfico de Pizza</p>
            </div>
          </Card>
        </div>

        {/* Card do Gráfico de Performance - Ocupa largura total */}
        <Card className="p-6 shadow-card">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Performance ao Longo do Tempo
          </h2>
          
          {/* Container placeholder do gráfico maior */}
          <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
            {/* 
              h-80: altura maior de 20rem (320px)
              bg-muted/30: fundo com cor secundária em 30% de opacidade
              rounded-lg: bordas arredondadas
            */}
            
            <p className="text-muted-foreground">Gráfico de Linhas</p>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}