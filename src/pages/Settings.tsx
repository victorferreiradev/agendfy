// Importa o componente de layout do dashboard para a estrutura da página
import { DashboardLayout } from "@/components/layout/DashboardLayout";
// Importa componentes de UI personalizados
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
// Importa ícones da biblioteca Lucide React
import { Building2, Clock, Bell, MessageSquare } from "lucide-react";

// Exporta o componente funcional Settings como padrão
export default function Settings() {
  // Retorna o JSX do componente
  return (
    // Usa o layout do dashboard como wrapper
    <DashboardLayout>
      {/* Container principal com espaçamento vertical, animação e largura máxima */}
      <div className="space-y-8 animate-fade-in max-w-4xl">
        {/* 
          space-y-8: espaçamento de 2rem (32px) entre elementos filhos
          animate-fade-in: animação personalizada de fade-in
          max-w-4xl: largura máxima de 56rem (896px) para melhor legibilidade
        */}

        {/* Cabeçalho da página */}
        <div>
          {/* Título principal da página */}
          <h1 className="text-3xl font-bold text-foreground">Configurações</h1>
          {/* 
            text-3xl: tamanho grande de texto (1.875rem / 30px)
            font-bold: peso negrito
            text-foreground: cor principal do texto
          */}
          
          {/* Descrição/subtítulo */}
          <p className="text-muted-foreground mt-2">
            Personalize seu sistema de agendamentos
            {/* 
              text-muted-foreground: cor de texto secundária
              mt-2: margin-top de 0.5rem (8px)
            */}
          </p>
        </div>

        {/* Card de Informações da Empresa */}
        <Card className="p-6 shadow-card">
          {/* 
            p-6: padding interno de 1.5rem (24px)
            shadow-card: sombra personalizada para cards
          */}
          
          {/* Cabeçalho do card com ícone e título */}
          <div className="flex items-center gap-3 mb-6">
            {/* 
              flex: layout flexbox
              items-center: alinha itens verticalmente
              gap-3: espaçamento de 0.75rem entre ícone e texto
              mb-6: margin-bottom de 1.5rem para espaçar do conteúdo
            */}
            
            {/* Ícone do edifício/empresa */}
            <Building2 className="w-5 h-5 text-primary" />
            {/* 
              w-5 h-5: tamanho 1.25rem (20px)
              text-primary: cor primária para o ícone
            */}
            
            {/* Título da seção */}
            <h2 className="text-xl font-semibold text-foreground">
              Informações da Empresa
            </h2>
          </div>
          
          {/* Conteúdo do card - formulário de informações */}
          <div className="space-y-4">
            {/* 
              space-y-4: espaçamento vertical de 1rem entre os campos
            */}
            
            {/* Linha com dois campos lado a lado em desktop */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* 
                grid: layout de grid CSS
                md:grid-cols-2: 2 colunas em tablets e desktop
                gap-4: espaçamento de 1rem entre colunas
              */}
              
              {/* Campo 1: Nome da Empresa */}
              <div className="space-y-2">
                {/* 
                  space-y-2: espaçamento vertical de 0.5rem entre label e input
                */}
                
                {/* Label do campo */}
                <Label htmlFor="company-name">Nome da Empresa</Label>
                {/* 
                  htmlFor: associa o label ao input com id correspondente
                  Melhora acessibilidade - clicar no label foca no input
                */}
                
                {/* Input do nome da empresa */}
                <Input id="company-name" placeholder="Sua Empresa" />
                {/* 
                  id="company-name": identificador único para associação com label
                  placeholder: texto de exemplo quando vazio
                */}
              </div>
              
              {/* Campo 2: Email da Empresa */}
              <div className="space-y-2">
                <Label htmlFor="company-email">Email</Label>
                <Input id="company-email" type="email" placeholder="contato@empresa.com" />
                {/* 
                  type="email": tipo de input para email com validação nativa
                */}
              </div>
            </div>
            
            {/* Campo 3: Telefone (ocupa linha inteira) */}
            <div className="space-y-2">
              <Label htmlFor="company-phone">Telefone</Label>
              <Input id="company-phone" placeholder="(11) 98765-4321" />
            </div>
            
            {/* Campo 4: Endereço (ocupa linha inteira) */}
            <div className="space-y-2">
              <Label htmlFor="company-address">Endereço</Label>
              <Input id="company-address" placeholder="Rua, Número - Bairro, Cidade - Estado" />
            </div>
          </div>
        </Card>

        {/* Card de Horário de Funcionamento */}
        <Card className="p-6 shadow-card">
          {/* Cabeçalho do card com ícone de relógio */}
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Horário de Funcionamento
            </h2>
          </div>
          
          {/* Conteúdo do card */}
          <div className="space-y-4">
            {/* Linha com três campos lado a lado em desktop */}
            <div className="grid md:grid-cols-3 gap-4 items-end">
              {/* 
                items-end: alinha os itens na base (útil quando labels têm alturas diferentes)
              */}
              
              {/* Campo 1: Dias da Semana (desabilitado) */}
              <div className="space-y-2">
                <Label>Dias da Semana</Label>
                <Input value="Segunda a Sexta" disabled />
                {/* 
                  value: valor fixo pré-definido
                  disabled: campo não editável
                */}
              </div>
              
              {/* Campo 2: Horário de Abertura */}
              <div className="space-y-2">
                <Label htmlFor="start-time">Abertura</Label>
                <Input id="start-time" type="time" defaultValue="08:00" />
                {/* 
                  type="time": input nativo para horários
                  defaultValue: valor padrão inicial
                */}
              </div>
              
              {/* Campo 3: Horário de Fechamento */}
              <div className="space-y-2">
                <Label htmlFor="end-time">Fechamento</Label>
                <Input id="end-time" type="time" defaultValue="18:00" />
              </div>
            </div>
          </div>
        </Card>

        {/* Card de Notificações */}
        <Card className="p-6 shadow-card">
          {/* Cabeçalho do card com ícone de sino */}
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Notificações
            </h2>
          </div>
          
          {/* Lista de configurações de notificação */}
          <div className="space-y-6">
            {/* 
              space-y-6: espaçamento vertical maior (1.5rem) entre os itens
            */}
            
            {/* Item 1: Email de Confirmação */}
            <div className="flex items-center justify-between">
              {/* 
                flex: layout flexbox
                items-center: alinha verticalmente
                justify-between: espaço entre texto e switch
              */}
              
              {/* Texto descritivo */}
              <div>
                <p className="font-medium text-foreground">Email de Confirmação</p>
                <p className="text-sm text-muted-foreground">
                  Enviar email ao confirmar agendamento
                </p>
              </div>
              
              {/* Switch toggle - ativado por padrão */}
              <Switch defaultChecked />
              {/* 
                defaultChecked: começa na posição "ligado"
              */}
            </div>
            
            {/* Item 2: Lembrete 24h Antes */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Lembrete 24h Antes</p>
                <p className="text-sm text-muted-foreground">
                  Notificar cliente um dia antes
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            
            {/* Item 3: Lembrete 1h Antes */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Lembrete 1h Antes</p>
                <p className="text-sm text-muted-foreground">
                  Notificar cliente uma hora antes
                </p>
              </div>
              <Switch />
              {/* 
                Sem defaultChecked: começa na posição "desligado"
              */}
            </div>
          </div>
        </Card>

        {/* Card de Integração WhatsApp */}
        <Card className="p-6 shadow-card">
          {/* Cabeçalho do card com ícone de mensagem */}
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Integração WhatsApp
            </h2>
          </div>
          
          {/* Conteúdo da integração */}
          <div className="space-y-4">
            {/* Indicador de status conectado */}
            <div className="flex items-center gap-2">
              {/* 
                Bolinha animada verde indicando status ativo
              */}
              <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
              {/* 
                w-3 h-3: tamanho pequeno (0.75rem)
                rounded-full: círculo perfeito
                bg-accent: cor de destaque (verde)
                animate-pulse: animação de pulsação suave
              */}
              
              {/* Texto do status */}
              <span className="text-sm font-medium text-accent">Conectado</span>
            </div>
            
            {/* Descrição da funcionalidade */}
            <p className="text-sm text-muted-foreground">
              Envie confirmações e lembretes automáticos via WhatsApp
            </p>
            
            {/* Botão para configurar mensagens */}
            <Button variant="outline">
              Configurar Mensagens
            </Button>
          </div>
        </Card>

        {/* Botões de ação no final da página */}
        <div className="flex justify-end gap-4">
          {/* 
            flex: layout flexbox
            justify-end: alinha os botões à direita
            gap-4: espaçamento de 1rem entre os botões
          */}
          
          {/* Botão Cancelar - ação secundária */}
          <Button variant="outline">Cancelar</Button>
          
          {/* Botão Salvar - ação primária */}
          <Button className="gradient-primary">Salvar Alterações</Button>
        </div>
      </div>
    </DashboardLayout>
  );
}