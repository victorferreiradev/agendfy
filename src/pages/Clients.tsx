import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, Mail, Phone } from "lucide-react";

const clients = [
  {
    id: 1,
    name: "Maria Silva",
    email: "maria.silva@email.com",
    phone: "(11) 98765-4321",
    totalAppointments: 12,
    lastVisit: "2025-01-10",
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

export default function Clients() {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Clientes</h1>
            <p className="text-muted-foreground mt-2">
              Gerencie sua base de clientes
            </p>
          </div>
          <Button className="gradient-primary">
            <UserPlus className="w-4 h-4 mr-2" />
            Novo Cliente
          </Button>
        </div>

        {/* Search */}
        <Card className="p-6 shadow-card">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar cliente por nome, email ou telefone..."
              className="pl-10"
            />
          </div>
        </Card>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <Card
              key={client.id}
              className="p-6 shadow-card hover:shadow-elevated transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                  {client.name.charAt(0)}
                </div>
                <Button variant="ghost" size="sm">
                  Editar
                </Button>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {client.name}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{client.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>{client.phone}</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Total de Visitas
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {client.totalAppointments}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Última Visita
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {new Date(client.lastVisit).toLocaleDateString('pt-BR')}
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
