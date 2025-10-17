import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Search, Filter, Plus } from "lucide-react";

const appointments = [
  {
    id: 1,
    client: "Maria Silva",
    service: "Consulta Dermatologia",
    date: "2025-01-15",
    time: "09:00",
    status: "Confirmado",
    employee: "Dra. Ana Costa",
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

export default function Appointments() {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Agendamentos</h1>
            <p className="text-muted-foreground mt-2">
              Gerencie todos os seus agendamentos
            </p>
          </div>
          <Button className="gradient-primary">
            <Plus className="w-4 h-4 mr-2" />
            Novo Agendamento
          </Button>
        </div>

        {/* Filters */}
        <Card className="p-6 shadow-card">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por cliente, serviço..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Data
            </Button>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
        </Card>

        {/* Appointments Table */}
        <Card className="shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/30 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Cliente
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Serviço
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Data & Hora
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Profissional
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {appointments.map((appointment) => (
                  <tr
                    key={appointment.id}
                    className="hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                          {appointment.client.charAt(0)}
                        </div>
                        <span className="font-medium text-foreground">
                          {appointment.client}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-foreground">
                      {appointment.service}
                    </td>
                    <td className="px-6 py-4 text-foreground">
                      <div>
                        <p className="font-medium">
                          {new Date(appointment.date).toLocaleDateString('pt-BR')}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {appointment.time}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-foreground">
                      {appointment.employee}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          appointment.status === "Confirmado"
                            ? "bg-accent/10 text-accent"
                            : appointment.status === "Aguardando"
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>
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
