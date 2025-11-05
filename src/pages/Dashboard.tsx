// Importa o componente de layout do dashboard para a estrutura da página
import { DashboardLayout } from "@/components/layout/DashboardLayout";
// Importa o componente de card de estatísticas
import { StatsCard } from "@/components/dashboard/StatsCard";
// Importa ícones da biblioteca Lucide React
import { Calendar, Users, TrendingUp, Clock } from "lucide-react";
// Importa componentes de UI personalizados
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Importa o hook de autenticação personalizado
import { useAuth } from "@/hooks/useAuth";
// Importa o hook de navegação do React Router
import { useNavigate } from "react-router-dom";

// Define um array de dados mock para as estatísticas do dashboard
const stats = [
  {
    title: "Agendamentos Hoje", // Título do card
    value: "24", // Valor principal
    change: "+12% vs ontem", // Variação em relação ao período anterior
    icon: Calendar, // Componente de ícone
    trend: "up" as const, // Tendência (up/down) - "as const" torna o tipo literal
  },
  {
    title: "Total de Clientes",
    value: "1,847",
    change: "+8% este mês",
    icon: Users,
    trend: "up" as const,
  },
  {
    title: "Taxa de Comparecimento",
    value: "94%",
    change: "+3% este mês",
    icon: TrendingUp,
    trend: "up" as const,
  },
  {
    title: "Tempo Médio de Espera",
    value: "8 min",
    change: "-2 min vs média",
    icon: Clock,
    trend: "up" as const,
  },
];

// Define um array de dados mock para os agendamentos recentes
const recentAppointments = [
  {
    id: 1, // Identificador único
    client: "Maria Silva", // Nome do cliente
    service: "Consulta Dermatologia", // Serviço agendado
    time: "09:00", // Horário
    status: "Confirmado", // Status do agendamento
  },
  {
    id: 2,
    client: "João Santos",
    service: "Corte de Cabelo",
    time: "10:30",
    status: "Aguardando",
  },
  {
    id: 3,
    client: "Ana Oliveira",
    service: "Manutenção Veículo",
    time: "14:00",
    status: "Confirmado",
  },
  {
    id: 4,
    client: "Carlos Pereira",
    service: "Consulta Nutrição",
    time: "15:30",
    status: "Pendente",
  },
];

// Exporta o componente principal do Dashboard
export default function Dashboard() {
  // Usa o hook de autenticação para obter token e função de logout
  const { token, logout } = useAuth();
  // Usa o hook de navegação para redirecionar entre páginas
  const navigate = useNavigate();

  // Define a função de logout
  const handleLogout = () => {
    logout(); // Chama a função de logout do hook useAuth
    navigate("/login"); // Redireciona para a página de login
  };

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

        {/* Cabeçalho da página com título e botão de logout */}
        <div className="flex items-center justify-between">
          {/* Container do título e descrição */}
          <div>
            {/* Título principal da página */}
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            {/* Descrição/subtítulo */}
            <p className="text-muted-foreground mt-2">
              Visão geral dos seus agendamentos e métricas
            </p>
          </div>
          
          {/* Botão de logout */}
          <Button variant="outline" onClick={handleLogout}>
            Sair
          </Button>
        </div>

        {/* Grid de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 
            grid: layout de grid CSS
            grid-cols-1: 1 coluna em mobile
            md:grid-cols-2: 2 colunas em tablets
            lg:grid-cols-4: 4 colunas em desktop
            gap-6: espaçamento de 1.5rem entre os cards
          */}
          
          {/* Mapeia cada estatística para um StatsCard */}
          {stats.map((stat, index) => (
            <div
              key={stat.title} // Chave única para React
              style={{ animationDelay: `${index * 0.1}s` }} // Delay progressivo para animação
              className="animate-fade-in" // Animação de entrada
            >
              {/* Renderiza o componente StatsCard passando todas as props do stat */}
              <StatsCard {...stat} />
            </div>
          ))}
        </div>

        {/* Grid inferior com agendamentos e ações rápidas */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* 
            grid: layout de grid CSS
            lg:grid-cols-3: 3 colunas em desktop
            gap-6: espaçamento de 1.5rem entre as colunas
          */}

          {/* Card de Agendamentos Recentes (ocupa 2/3 da largura) */}
          <Card className="lg:col-span-2 p-6 shadow-card">
            {/* 
              lg:col-span-2: ocupa 2 colunas em desktop
              p-6: padding interno de 1.5rem
              shadow-card: sombra personalizada
            */}
            
            {/* Cabeçalho do card com título e botão */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">
                Agendamentos de Hoje
              </h2>
              <Button variant="outline" size="sm">
                Ver Todos
              </Button>
            </div>
            
            {/* Lista de agendamentos */}
            <div className="space-y-4">
              {/* 
                space-y-4: espaçamento vertical de 1rem entre os agendamentos
              */}
              
              {/* Mapeia cada agendamento para um item na lista */}
              {recentAppointments.map((appointment) => (
                <div
                  key={appointment.id} // Chave única para React
                  className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                  /* 
                    flex: layout flexbox
                    items-center: alinha itens verticalmente
                    justify-between: espaço entre os elementos
                    p-4: padding interno de 1rem
                    bg-muted/30: fundo com cor secundária em 30% de opacidade
                    rounded-lg: cantos arredondados
                    hover:bg-muted/50: muda o fundo ao passar o mouse (50% de opacidade)
                    transition-colors: transição suave para mudanças de cor
                  */
                >
                  {/* Lado esquerdo: Informações do cliente */}
                  <div className="flex items-center gap-4">
                    {/* Avatar circular com a inicial do cliente */}
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      {appointment.client.charAt(0)}
                      {/* 
                        Pega a primeira letra do nome do cliente
                        Ex: "Maria Silva" → "M"
                      */}
                    </div>
                    {/* Nome e serviço do cliente */}
                    <div>
                      <p className="font-medium text-foreground">
                        {appointment.client}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {appointment.service}
                      </p>
                    </div>
                  </div>
                  
                  {/* Lado direito: Horário e status */}
                  <div className="text-right">
                    {/* Horário do agendamento */}
                    <p className="font-medium text-foreground">{appointment.time}</p>
                    {/* Badge de status com cores condicionais */}
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
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
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Card de Ações Rápidas (ocupa 1/3 da largura) */}
          <Card className="p-6 shadow-card">
            {/* Título do card */}
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Ações Rápidas
            </h2>
            
            {/* Lista de botões de ação */}
            <div className="space-y-3">
              {/* 
                space-y-3: espaçamento vertical de 0.75rem entre os botões
              */}
              
              {/* Botão para novo agendamento */}
              <Button 
                className="w-full justify-start gradient-primary"
                onClick={() => navigate("/appointments")} // Navega para página de agendamentos
              >
                <Calendar className="w-4 h-4 mr-2" />
                Novo Agendamento
              </Button>
              
              {/* Botão para adicionar cliente */}
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => navigate("/clients")} // Navega para página de clientes
              >
                <Users className="w-4 h-4 mr-2" />
                Adicionar Cliente
              </Button>
              
              {/* Botão para ver relatórios */}
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => navigate("/reports")} // Navega para página de relatórios
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Ver Relatórios
              </Button>
            </div>

            {/* Seção de status do sistema */}
            <div className="mt-8 p-4 bg-muted/30 rounded-lg">
              {/* 
                mt-8: margin-top de 2rem
                p-4: padding interno de 1rem
                bg-muted/30: fundo com cor secundária em 30% de opacidade
                rounded-lg: cantos arredondados
              */}
              
              <h3 className="font-semibold text-foreground mb-2">
                Status do Sistema
              </h3>
              
              {/* Exibe o status do token de autenticação */}
              <p className="text-sm text-muted-foreground mb-4">
                Token: {token ? "✅ Logado" : "❌ Deslogado"}
                {/* 
                  Operador ternário: se token existe mostra "✅ Logado", senão "❌ Deslogado"
                */}
              </p>
              
              {/* Indicador visual de status online */}
              <div className="flex items-center gap-2">
                {/* Bolinha animada verde */}
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {/* Texto do status */}
                <span className="text-sm text-accent font-medium">
                  Sistema Online
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}