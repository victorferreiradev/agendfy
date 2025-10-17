import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Calendar, Users, TrendingUp, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  {
    title: "Agendamentos Hoje",
    value: "24",
    change: "+12% vs ontem",
    icon: Calendar,
    trend: "up" as const,
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

const recentAppointments = [
  {
    id: 1,
    client: "Maria Silva",
    service: "Consulta Dermatologia",
    time: "09:00",
    status: "Confirmado",
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

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Visão geral dos seus agendamentos e métricas
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-fade-in"
            >
              <StatsCard {...stat} />
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Appointments */}
          <Card className="lg:col-span-2 p-6 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">
                Agendamentos de Hoje
              </h2>
              <Button variant="outline" size="sm">
                Ver Todos
              </Button>
            </div>
            <div className="space-y-4">
              {recentAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      {appointment.client.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {appointment.client}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {appointment.service}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">{appointment.time}</p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        appointment.status === "Confirmado"
                          ? "bg-accent/10 text-accent"
                          : appointment.status === "Aguardando"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6 shadow-card">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Ações Rápidas
            </h2>
            <div className="space-y-3">
              <Button className="w-full justify-start gradient-primary">
                <Calendar className="w-4 h-4 mr-2" />
                Novo Agendamento
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                Adicionar Cliente
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="w-4 h-4 mr-2" />
                Ver Relatórios
              </Button>
            </div>

            <div className="mt-8 p-4 bg-muted/30 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">
                Integração WhatsApp
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Envie lembretes automáticos para seus clientes
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-accent font-medium">
                  Conectado
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
