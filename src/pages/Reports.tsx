import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Users, Calendar, DollarSign } from "lucide-react";

export default function Reports() {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Relatórios</h1>
            <p className="text-muted-foreground mt-2">
              Análises e insights do seu negócio
            </p>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6 shadow-card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Este Mês</p>
                <p className="text-2xl font-bold text-foreground">342</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 shadow-card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Novos Clientes</p>
                <p className="text-2xl font-bold text-foreground">87</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 shadow-card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Taxa Ocupação</p>
                <p className="text-2xl font-bold text-foreground">87%</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 shadow-card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Faturamento</p>
                <p className="text-2xl font-bold text-foreground">R$ 24.5k</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Charts Placeholder */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6 shadow-card">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Agendamentos por Mês
            </h2>
            <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Gráfico de Barras</p>
            </div>
          </Card>
          
          <Card className="p-6 shadow-card">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Serviços Mais Populares
            </h2>
            <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Gráfico de Pizza</p>
            </div>
          </Card>
        </div>

        <Card className="p-6 shadow-card">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Performance ao Longo do Tempo
          </h2>
          <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Gráfico de Linhas</p>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
