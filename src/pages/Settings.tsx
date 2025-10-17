import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Building2, Clock, Bell, MessageSquare } from "lucide-react";

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Configurações</h1>
          <p className="text-muted-foreground mt-2">
            Personalize seu sistema de agendamentos
          </p>
        </div>

        {/* Company Info */}
        <Card className="p-6 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Informações da Empresa
            </h2>
          </div>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">Nome da Empresa</Label>
                <Input id="company-name" placeholder="Sua Empresa" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-email">Email</Label>
                <Input id="company-email" type="email" placeholder="contato@empresa.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company-phone">Telefone</Label>
              <Input id="company-phone" placeholder="(11) 98765-4321" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company-address">Endereço</Label>
              <Input id="company-address" placeholder="Rua, Número - Bairro, Cidade - Estado" />
            </div>
          </div>
        </Card>

        {/* Working Hours */}
        <Card className="p-6 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Horário de Funcionamento
            </h2>
          </div>
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4 items-end">
              <div className="space-y-2">
                <Label>Dias da Semana</Label>
                <Input value="Segunda a Sexta" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="start-time">Abertura</Label>
                <Input id="start-time" type="time" defaultValue="08:00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end-time">Fechamento</Label>
                <Input id="end-time" type="time" defaultValue="18:00" />
              </div>
            </div>
          </div>
        </Card>

        {/* Notifications */}
        <Card className="p-6 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Notificações
            </h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Email de Confirmação</p>
                <p className="text-sm text-muted-foreground">
                  Enviar email ao confirmar agendamento
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Lembrete 24h Antes</p>
                <p className="text-sm text-muted-foreground">
                  Notificar cliente um dia antes
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Lembrete 1h Antes</p>
                <p className="text-sm text-muted-foreground">
                  Notificar cliente uma hora antes
                </p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>

        {/* WhatsApp Integration */}
        <Card className="p-6 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Integração WhatsApp
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Conectado</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Envie confirmações e lembretes automáticos via WhatsApp
            </p>
            <Button variant="outline">
              Configurar Mensagens
            </Button>
          </div>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline">Cancelar</Button>
          <Button className="gradient-primary">Salvar Alterações</Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
