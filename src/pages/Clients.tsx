// Importa o componente de layout do dashboard para a estrutura da página
import { DashboardLayout } from "@/components/layout/DashboardLayout";
// Importa componentes de UI personalizados
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// Importa ícones da biblioteca Lucide React
import { Search, UserPlus, Mail, Phone } from "lucide-react";

// Define um array de dados mock (simulados) para os clientes
// Em uma aplicação real, esses dados viriam de uma API
const clients = [
  {
    id: 1, // Identificador único do cliente
    name: "Maria Silva", // Nome completo do cliente
    email: "maria.silva@email.com", // Email de contato
    phone: "(11) 98765-4321", // Telefone no formato brasileiro
    totalAppointments: 12, // Total de agendamentos realizados
    lastVisit: "2025-01-10", // Data da última visita no formato YYYY-MM-DD
  },
  {
    id: 2,
    name: "João Santos",
    email: "joao.santos@email.com",
    phone: "(11) 98765-4322",
    totalAppointments: 8,
    lastVisit: "2025-01-12",
  },
  {
    id: 3,
    name: "Ana Oliveira",
    email: "ana.oliveira@email.com",
    phone: "(11) 98765-4323",
    totalAppointments: 15,
    lastVisit: "2025-01-14",
  },
  {
    id: 4,
    name: "Carlos Pereira",
    email: "carlos.pereira@email.com",
    phone: "(11) 98765-4324",
    totalAppointments: 5,
    lastVisit: "2025-01-08",
  },
];

// Exporta o componente principal da página de Clientes
export default function Clients() {
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
            <h1 className="text-3xl font-bold text-foreground">Clientes</h1>
            {/* Descrição/subtítulo */}
            <p className="text-muted-foreground mt-2">
              Gerencie sua base de clientes
            </p>
          </div>
          
          {/* Botão para adicionar novo cliente */}
          <Button className="gradient-primary">
            {/* Ícone de adicionar usuário */}
            <UserPlus className="w-4 h-4 mr-2" />
            {/* Texto do botão */}
            Novo Cliente
          </Button>
        </div>

        {/* Seção de Busca */}
        <Card className="p-6 shadow-card">
          {/* 
            p-6: padding interno de 1.5rem (24px)
            shadow-card: sombra personalizada para cards
          */}
          
          {/* Container relativo para posicionar o ícone dentro do input */}
          <div className="relative">
            {/* Ícone de busca posicionado absolutamente dentro do input */}
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            {/* 
              absolute: posicionamento absoluto
              left-3: 0.75rem da esquerda
              top-1/2: 50% do topo
              -translate-y-1/2: move para cima 50% da própria altura (centraliza verticalmente)
              w-4 h-4: tamanho 1rem
              text-muted-foreground: cor secundária
            */}
            
            {/* Input de busca com padding extra à esquerda para o ícone */}
            <Input
              placeholder="Buscar cliente por nome, email ou telefone..."
              className="pl-10" // padding-left de 2.5rem para dar espaço ao ícone
            />
          </div>
        </Card>

        {/* Grid de Cards dos Clientes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 
            grid: layout de grid CSS
            md:grid-cols-2: 2 colunas em tablets (medium breakpoint+)
            lg:grid-cols-3: 3 colunas em desktop (large breakpoint+)
            gap-6: espaçamento de 1.5rem entre os cards
          */}
          
          {/* Mapeia cada cliente para um card no grid */}
          {clients.map((client, index) => (
            <Card
              key={client.id} // Chave única para React
              className="p-6 shadow-card hover:shadow-elevated transition-all animate-fade-in"
              /* 
                p-6: padding interno de 1.5rem
                shadow-card: sombra padrão do card
                hover:shadow-elevated: sombra maior ao passar o mouse
                transition-all: transição suave para todas as propriedades animáveis
                animate-fade-in: animação de entrada com fade
              */
              style={{ animationDelay: `${index * 0.1}s` }}
              /* 
                Define um delay progressivo para a animação de cada card
                Primeiro card: 0s, segundo: 0.1s, terceiro: 0.2s, etc.
                Cria um efeito cascata na entrada dos cards
              */
            >
              {/* Cabeçalho do card com avatar e botão de editar */}
              <div className="flex items-start justify-between mb-4">
                {/* 
                  flex: layout flexbox
                  items-start: alinha itens no topo
                  justify-between: espaço entre os elementos
                  mb-4: margin-bottom de 1rem
                */}
                
                {/* Avatar circular com a inicial do cliente */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                  {client.name.charAt(0)}
                  {/* 
                    w-16 h-16: tamanho 4rem (64px)
                    rounded-full: círculo perfeito
                    bg-primary/10: fundo com cor primária em 10% de opacidade
                    flex items-center justify-center: centraliza o conteúdo
                    text-primary: cor primária para o texto
                    text-2xl: tamanho grande de texto
                    font-bold: peso negrito
                    client.name.charAt(0): pega a primeira letra do nome
                  */}
                </div>
                
                {/* Botão de editar cliente */}
                <Button variant="ghost" size="sm">
                  Editar
                </Button>
              </div>
              
              {/* Nome do cliente */}
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {client.name}
                {/* 
                  text-lg: tamanho grande de texto
                  font-semibold: peso semi-negrito
                  text-foreground: cor principal do texto
                  mb-4: margin-bottom de 1rem
                */}
              </h3>
              
              {/* Seção de informações de contato */}
              <div className="space-y-3">
                {/* 
                  space-y-3: espaçamento vertical de 0.75rem entre os itens
                */}
                
                {/* Item de email */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  {/* 
                    flex items-center: alinha ícone e texto verticalmente
                    gap-2: espaçamento de 0.5rem entre ícone e texto
                    text-sm: texto pequeno
                    text-muted-foreground: cor secundária
                  */}
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{client.email}</span>
                  {/* truncate: corta texto longo com ellipsis (...) */}
                </div>
                
                {/* Item de telefone */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>{client.phone}</span>
                </div>
              </div>
              
              {/* Seção de estatísticas do cliente */}
              <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-4">
                {/* 
                  mt-6: margin-top de 1.5rem
                  pt-6: padding-top de 1.5rem (cria espaço acima da borda)
                  border-t: borda superior
                  border-border: cor da borda do tema
                  grid: layout de grid
                  grid-cols-2: 2 colunas
                  gap-4: espaçamento de 1rem entre colunas
                */}
                
                {/* Coluna 1: Total de visitas */}
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Total de Visitas
                    {/* 
                      text-xs: texto extra pequeno
                      text-muted-foreground: cor secundária
                      mb-1: margin-bottom de 0.25rem
                    */}
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {client.totalAppointments}
                    {/* 
                      text-lg: tamanho grande
                      font-semibold: peso semi-negrito
                      text-foreground: cor principal
                    */}
                  </p>
                </div>
                
                {/* Coluna 2: Última visita */}
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Última Visita
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {new Date(client.lastVisit).toLocaleDateString('pt-BR')}
                    {/* 
                      Converte "2025-01-10" para "10/01/2025"
                      toLocaleDateString('pt-BR'): formata para português brasileiro
                    */}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}