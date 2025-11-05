// Importa o componente de layout do dashboard para a estrutura da página
import { DashboardLayout } from "@/components/layout/DashboardLayout";
// Importa componentes de UI personalizados
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// Importa ícones da biblioteca Lucide React
import { Calendar, Search, Filter, Plus } from "lucide-react";

// Define um array de dados mock (simulados) para os agendamentos
// Em uma aplicação real, esses dados viriam de uma API
const appointments = [
  {
    id: 1, // Identificador único do agendamento
    client: "Maria Silva", // Nome do cliente
    service: "Consulta Dermatologia", // Tipo de serviço
    date: "2025-01-15", // Data no formato YYYY-MM-DD
    time: "09:00", // Horário do agendamento
    status: "Confirmado", // Status: Confirmado, Aguardando, Pendente
    employee: "Dra. Ana Costa", // Nome do profissional
  },
  {
    id: 2,
    client: "João Santos",
    service: "Corte de Cabelo",
    date: "2025-01-15",
    time: "10:30",
    status: "Aguardando",
    employee: "Carlos Barbeiro",
  },
  {
    id: 3,
    client: "Ana Oliveira",
    service: "Manutenção Veículo",
    date: "2025-01-15",
    time: "14:00",
    status: "Confirmado",
    employee: "Pedro Mecânico",
  },
  {
    id: 4,
    client: "Carlos Pereira",
    service: "Consulta Nutrição",
    date: "2025-01-16",
    time: "15:30",
    status: "Pendente",
    employee: "Dra. Juliana Lima",
  },
];

// Exporta o componente principal da página de Agendamentos
export default function Appointments() {
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
            <h1 className="text-3xl font-bold text-foreground">Agendamentos</h1>
            {/* Descrição/subtítulo */}
            <p className="text-muted-foreground mt-2">
              Gerencie todos os seus agendamentos
            </p>
          </div>
          
          {/* Botão para criar novo agendamento */}
          <Button className="gradient-primary">
            {/* Ícone de adição */}
            <Plus className="w-4 h-4 mr-2" />
            {/* Texto do botão */}
            Novo Agendamento
          </Button>
        </div>

        {/* Seção de Filtros e Busca */}
        <Card className="p-6 shadow-card">
          {/* 
            p-6: padding interno de 1.5rem (24px)
            shadow-card: sombra personalizada para cards
          */}
          
          {/* Container flexível que se adapta a dispositivos móveis */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* 
              flex-col: coluna em mobile
              md:flex-row: linha em desktop (medium breakpoint+)
              gap-4: espaçamento de 1rem entre elementos
            */}
            
            {/* Campo de busca com ícone */}
            <div className="flex-1 relative">
              {/* 
                flex-1: ocupa todo o espaço disponível
                relative: posicionamento relativo para o ícone absoluto
              */}
              
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
                placeholder="Buscar por cliente, serviço..."
                className="pl-10" // padding-left de 2.5rem para dar espaço ao ícone
              />
            </div>
            
            {/* Botão de filtro por data */}
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Data
            </Button>
            
            {/* Botão de filtros adicionais */}
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
        </Card>

        {/* Tabela de Agendamentos */}
        <Card className="shadow-card overflow-hidden">
          {/* 
            shadow-card: sombra personalizada
            overflow-hidden: esconde qualquer conteúdo que ultrapasse o card
          */}
          
          {/* Container para permitir scroll horizontal em telas pequenas */}
          <div className="overflow-x-auto">
            {/* Tabela que ocupa 100% da largura */}
            <table className="w-full">
              {/* Cabeçalho da tabela */}
              <thead className="bg-muted/30 border-b border-border">
                {/* 
                  bg-muted/30: fundo com cor secundária em 30% de opacidade
                  border-b: borda inferior
                  border-border: cor da borda do tema
                */}
                <tr>
                  {/* Coluna Cliente */}
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Cliente
                  </th>
                  {/* Coluna Serviço */}
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Serviço
                  </th>
                  {/* Coluna Data & Hora */}
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Data & Hora
                  </th>
                  {/* Coluna Profissional */}
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Profissional
                  </th>
                  {/* Coluna Status */}
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Status
                  </th>
                  {/* Coluna Ações */}
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Ações
                  </th>
                </tr>
              </thead>
              
              {/* Corpo da tabela */}
              <tbody className="divide-y divide-border">
                {/* 
                  divide-y: adiciona bordas entre linhas verticalmente
                  divide-border: usa a cor de borda do tema
                */}
                
                {/* Mapeia cada agendamento para uma linha na tabela */}
                {appointments.map((appointment) => (
                  <tr
                    key={appointment.id} // Chave única para React
                    className="hover:bg-muted/30 transition-colors"
                    /* 
                      hover:bg-muted/30: muda o fundo ao passar o mouse
                      transition-colors: transição suave para a mudança de cor
                    */
                  >
                    {/* Célula do Cliente com avatar e nome */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {/* Avatar circular com a inicial do cliente */}
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                          {appointment.client.charAt(0)}
                          {/* 
                            Pega a primeira letra do nome do cliente
                            Ex: "Maria Silva" → "M"
                          */}
                        </div>
                        {/* Nome do cliente */}
                        <span className="font-medium text-foreground">
                          {appointment.client}
                        </span>
                      </div>
                    </td>
                    
                    {/* Célula do Serviço */}
                    <td className="px-6 py-4 text-foreground">
                      {appointment.service}
                    </td>
                    
                    {/* Célula da Data e Hora */}
                    <td className="px-6 py-4 text-foreground">
                      <div>
                        {/* Data formatada em português brasileiro */}
                        <p className="font-medium">
                          {new Date(appointment.date).toLocaleDateString('pt-BR')}
                          {/* 
                            Converte "2025-01-15" para "15/01/2025"
                          */}
                        </p>
                        {/* Horário em texto secundário */}
                        <p className="text-sm text-muted-foreground">
                          {appointment.time}
                        </p>
                      </div>
                    </td>
                    
                    {/* Célula do Profissional */}
                    <td className="px-6 py-4 text-foreground">
                      {appointment.employee}
                    </td>
                    
                    {/* Célula do Status com badge colorido */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          // Aplica classes condicionais baseadas no status
                          appointment.status === "Confirmado"
                            ? "bg-accent/10 text-accent" // Verde para confirmado
                            : appointment.status === "Aguardando"
                            ? "bg-primary/10 text-primary" // Azul para aguardando
                            : "bg-muted text-muted-foreground" // Cinza para pendente
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                    
                    {/* Célula de Ações com botão de editar */}
                    <td className="px-6 py-4">
                      <Button variant="ghost" size="sm">
                        Editar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}