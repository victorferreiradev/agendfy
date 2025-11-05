// Importa o componente de layout do dashboard para a estrutura da página
import { DashboardLayout } from "@/components/layout/DashboardLayout";
// Importa componentes de UI personalizados
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Importa ícones da biblioteca Lucide React
import { MessageSquare, Send, CheckCheck } from "lucide-react";

// Define um array de dados mock (simulados) para as mensagens do WhatsApp
const messages = [
  {
    id: 1, // Identificador único da mensagem
    client: "Maria Silva", // Nome do cliente
    message: "Confirmação de agendamento para amanhã às 09:00", // Conteúdo da mensagem
    status: "Entregue", // Status da mensagem: Entregue, Lido, Enviado
    time: "10:30", // Horário ou data da mensagem
  },
  {
    id: 2,
    client: "João Santos",
    message: "Lembrete: Seu agendamento é hoje às 10:30",
    status: "Lido",
    time: "09:00",
  },
  {
    id: 3,
    client: "Ana Oliveira",
    message: "Sua consulta foi confirmada com sucesso!",
    status: "Enviado",
    time: "Ontem",
  },
];

// Exporta o componente funcional WhatsApp como padrão
export default function WhatsApp() {
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

        {/* Cabeçalho da página com título e status de conexão */}
        <div className="flex items-center justify-between">
          {/* Container do título e descrição */}
          <div>
            {/* Título principal da página */}
            <h1 className="text-3xl font-bold text-foreground">WhatsApp</h1>
            {/* 
              text-3xl: tamanho grande de texto (1.875rem / 30px)
              font-bold: peso negrito
              text-foreground: cor principal do texto
            */}
            
            {/* Descrição/subtítulo */}
            <p className="text-muted-foreground mt-2">
              Gerencie suas mensagens automáticas
              {/* 
                text-muted-foreground: cor de texto secundária
                mt-2: margin-top de 0.5rem (8px)
              */}
            </p>
          </div>
          
          {/* Indicador de status da conexão WhatsApp */}
          <div className="flex items-center gap-2">
            {/* 
              flex: layout flexbox
              items-center: alinha itens verticalmente
              gap-2: espaçamento de 0.5rem entre ícone e texto
            */}
            
            {/* Bolinha animada verde indicando status ativo */}
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
            {/* 
              w-3 h-3: tamanho pequeno (0.75rem)
              rounded-full: círculo perfeito
              bg-accent: cor de destaque (verde)
              animate-pulse: animação de pulsação suave
            */}
            
            {/* Texto do status */}
            <span className="text-sm font-medium text-accent">Conectado</span>
            {/* 
              text-sm: texto pequeno
              font-medium: peso médio
              text-accent: cor de destaque (verde)
            */}
          </div>
        </div>

        {/* Grid principal com layout de 2/3 + 1/3 em desktop */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* 
            grid: layout de grid CSS
            lg:grid-cols-3: 3 colunas em desktop
            gap-6: espaçamento de 1.5rem entre as colunas
          */}

          {/* Seção de Mensagens Recentes (ocupa 2/3 da largura) */}
          <Card className="lg:col-span-2 p-6 shadow-card">
            {/* 
              lg:col-span-2: ocupa 2 colunas em desktop
              p-6: padding interno de 1.5rem (24px)
              shadow-card: sombra personalizada para cards
            */}
            
            {/* Cabeçalho da seção com título e botão */}
            <div className="flex items-center justify-between mb-6">
              {/* 
                flex: layout flexbox
                items-center: alinha verticalmente
                justify-between: espaço entre título e botão
                mb-6: margin-bottom de 1.5rem para espaçar da lista
              */}
              
              {/* Título da seção */}
              <h2 className="text-xl font-semibold text-foreground">
                Mensagens Recentes
              </h2>
              
              {/* Botão para ver todas as mensagens */}
              <Button variant="outline" size="sm">
                Ver Todas
              </Button>
            </div>
            
            {/* Lista de mensagens */}
            <div className="space-y-4">
              {/* 
                space-y-4: espaçamento vertical de 1rem entre as mensagens
              */}
              
              {/* Mapeia cada mensagem para um item na lista */}
              {messages.map((msg) => (
                <div
                  key={msg.id} // Chave única para React
                  className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                  /* 
                    p-4: padding interno de 1rem
                    bg-muted/30: fundo com cor secundária em 30% de opacidade
                    rounded-lg: bordas arredondadas
                    hover:bg-muted/50: muda o fundo ao passar o mouse (50% de opacidade)
                    transition-colors: transição suave para mudanças de cor
                  */
                >
                  {/* Cabeçalho da mensagem com cliente e status */}
                  <div className="flex items-start justify-between mb-2">
                    {/* 
                      flex: layout flexbox
                      items-start: alinha itens no topo
                      justify-between: espaço entre cliente e status
                      mb-2: margin-bottom de 0.5rem para espaçar do conteúdo
                    */}
                    
                    {/* Lado esquerdo: Informações do cliente */}
                    <div className="flex items-center gap-3">
                      {/* 
                        flex: layout flexbox
                        items-center: alinha verticalmente
                        gap-3: espaçamento de 0.75rem entre avatar e texto
                      */}
                      
                      {/* Avatar circular com a inicial do cliente */}
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                        {msg.client.charAt(0)}
                        {/* 
                          w-10 h-10: tamanho 2.5rem (40px)
                          rounded-full: círculo perfeito
                          bg-accent/10: fundo com cor de destaque em 10% de opacidade
                          flex items-center justify-center: centraliza o conteúdo
                          text-accent: cor de destaque para o texto
                          font-semibold: peso semi-negrito
                          msg.client.charAt(0): primeira letra do nome do cliente
                        */}
                      </div>
                      
                      {/* Nome do cliente e horário */}
                      <div>
                        <p className="font-medium text-foreground">{msg.client}</p>
                        <p className="text-xs text-muted-foreground">{msg.time}</p>
                      </div>
                    </div>
                    
                    {/* Lado direito: Status da mensagem */}
                    <div className="flex items-center gap-1 text-accent">
                      {/* 
                        flex: layout flexbox
                        items-center: alinha verticalmente
                        gap-1: espaçamento pequeno entre ícone e texto
                        text-accent: cor de destaque (verde)
                      */}
                      
                      {/* Ícone de check (entregue/lido) */}
                      <CheckCheck className="w-4 h-4" />
                      {/* 
                        w-4 h-4: tamanho 1rem (16px)
                      */}
                      
                      {/* Texto do status */}
                      <span className="text-xs">{msg.status}</span>
                    </div>
                  </div>
                  
                  {/* Conteúdo da mensagem */}
                  <p className="text-sm text-muted-foreground ml-13">
                    {/* 
                      text-sm: texto pequeno
                      text-muted-foreground: cor secundária
                      ml-13: margin-left de 3.25rem (52px) - para alinhar com o texto do nome
                    */}
                    {msg.message}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Seção lateral com estatísticas e ações rápidas (ocupa 1/3 da largura) */}
          <div className="space-y-6">
            {/* 
              space-y-6: espaçamento vertical de 1.5rem entre os cards
            */}

            {/* Card de estatística: Mensagens de hoje */}
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                {/* Container do ícone */}
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  {/* 
                    w-12 h-12: tamanho 3rem (48px)
                    rounded-lg: bordas arredondadas
                    bg-accent/10: fundo com cor de destaque em 10% de opacidade
                    flex items-center justify-center: centraliza o ícone
                  */}
                  
                  {/* Ícone de envio */}
                  <Send className="w-6 h-6 text-accent" />
                </div>
                
                {/* Texto da estatística */}
                <div>
                  <p className="text-sm text-muted-foreground">Hoje</p>
                  <p className="text-2xl font-bold text-foreground">24</p>
                </div>
              </div>
              
              {/* Descrição da estatística */}
              <p className="text-sm text-muted-foreground">
                Mensagens enviadas
              </p>
            </Card>

            {/* Card de estatística: Total do mês */}
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                {/* Container do ícone com cor diferente */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  {/* Ícone de mensagem */}
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Este Mês</p>
                  <p className="text-2xl font-bold text-foreground">342</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Total de mensagens
              </p>
            </Card>

            {/* Card de configurações rápidas */}
            <Card className="p-6 shadow-card">
              {/* Título do card */}
              <h3 className="font-semibold text-foreground mb-4">
                Configuração Rápida
              </h3>
              
              {/* Lista de botões de ação */}
              <div className="space-y-3">
                {/* 
                  space-y-3: espaçamento vertical de 0.75rem entre os botões
                */}
                
                {/* Botão para templates de mensagens */}
                <Button variant="outline" className="w-full justify-start">
                  Templates de Mensagens
                </Button>
                
                {/* Botão para horários de envio */}
                <Button variant="outline" className="w-full justify-start">
                  Horários de Envio
                </Button>
                
                {/* Botão para configurações avançadas */}
                <Button variant="outline" className="w-full justify-start">
                  Configurações Avançadas
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}