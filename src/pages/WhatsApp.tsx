import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, CheckCheck } from "lucide-react";

const messages = [
  {
    id: 1,
    client: "Maria Silva",
    message: "Confirmação de agendamento para amanhã às 09:00",
    status: "Entregue",
    time: "10:30",
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

export default function WhatsApp() {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">WhatsApp</h1>
            <p className="text-muted-foreground mt-2">
              Gerencie suas mensagens automáticas
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Conectado</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Message Templates */}
          <Card className="lg:col-span-2 p-6 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">
                Mensagens Recentes
              </h2>
              <Button variant="outline" size="sm">
                Ver Todas
              </Button>
            </div>
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                        {msg.client.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{msg.client}</p>
                        <p className="text-xs text-muted-foreground">{msg.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-accent">
                      <CheckCheck className="w-4 h-4" />
                      <span className="text-xs">{msg.status}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground ml-13">
                    {msg.message}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Stats */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Send className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Hoje</p>
                  <p className="text-2xl font-bold text-foreground">24</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Mensagens enviadas
              </p>
            </Card>

            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
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

            <Card className="p-6 shadow-card">
              <h3 className="font-semibold text-foreground mb-4">
                Configuração Rápida
              </h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Templates de Mensagens
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Horários de Envio
                </Button>
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
