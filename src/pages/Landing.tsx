// Importa o componente Button da biblioteca de componentes UI
import { Button } from "@/components/ui/button";
// Importa ícones da biblioteca Lucide React
import { Calendar, Users, BarChart3, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";
// Importa o componente Link do React Router para navegação
import { Link } from "react-router-dom";
// Importa imagem do dashboard para a seção hero
import heroImage from "@/assets/hero-dashboard.jpg";

// Define array de características/recursos do produto
const features = [
  {
    icon: Calendar, // Componente de ícone
    title: "Agendamento Inteligente", // Título do recurso
    description: "Sistema de calendário intuitivo com disponibilidade em tempo real", // Descrição
  },
  {
    icon: Users,
    title: "Gestão de Clientes",
    description: "Cadastro completo com histórico de agendamentos e preferências",
  },
  {
    icon: BarChart3,
    title: "Relatórios Avançados",
    description: "Analytics completo com métricas de desempenho e insights",
  },
  {
    icon: MessageSquare,
    title: "Integração WhatsApp",
    description: "Confirmações e lembretes automáticos direto no WhatsApp",
  },
];

// Define array de benefícios do produto
const benefits = [
  "Reduza o no-show em até 70%", // Redução de faltas
  "Automatize confirmações e lembretes", // Automação
  "Aumente a satisfação dos clientes", // Satisfação
  "Otimize a gestão do seu tempo", // Eficiência
  "Acesse de qualquer dispositivo", // Acessibilidade
  "Suporte dedicado 24/7", // Suporte
];

// Exporta o componente principal da página de Landing
export default function Landing() {
  // Retorna o JSX do componente
  return (
    // Container principal com altura mínima da tela e cor de fundo
    <div className="min-h-screen bg-background">
      {/* Header/Navegação */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        {/* 
          border-b: borda inferior
          border-border: cor da borda do tema
          bg-background/95: fundo com 95% de opacidade
          backdrop-blur: efeito de desfoque no fundo
          supports-[backdrop-filter]:bg-background/60: fallback para navegadores sem suporte a backdrop-filter
          sticky: posicionamento sticky (grudável)
          top-0: colado no topo
          z-50: alta prioridade de z-index para ficar acima de outros elementos
        */}
        
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Container com largura máxima, centralizado, padding, layout flex e espaço entre */}
          
          {/* Logo e nome da marca */}
          <div className="flex items-center gap-2">
            {/* Logo visual - gradiente quadrado */}
            <div className="w-8 h-8 rounded-lg gradient-primary" />
            {/* Nome da marca */}
            <span className="text-xl font-bold text-foreground">Agendify</span>
          </div>
          
          {/* Navegação principal - escondida em mobile */}
          <nav className="hidden md:flex items-center gap-8">
            {/* 
              hidden md:flex: escondido em mobile, flex em desktop
              gap-8: espaçamento grande entre links
            */}
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Recursos
            </a>
            <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Benefícios
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Preços
            </a>
          </nav>
          
          {/* Botões de ação */}
          <div className="flex items-center gap-4">
            {/* Link para login */}
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                Entrar
              </Button>
            </Link>
            {/* Link para teste gratuito */}
            <Link to="/dashboard">
              <Button size="sm" className="gradient-primary">
                Testar Grátis
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Seção Hero (Principal) */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        {/* 
          container: largura máxima centralizada
          px-4: padding horizontal
          py-20: padding vertical grande (5rem)
          lg:py-32: padding vertical ainda maior em desktop (8rem)
        */}
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Grid que vira 2 colunas em desktop, centraliza itens verticalmente */}
          
          {/* Coluna de texto/conteúdo */}
          <div className="space-y-8 animate-fade-in">
            {/* 
              space-y-8: espaçamento vertical entre elementos filhos
              animate-fade-in: animação de entrada com fade
            */}
            
            {/* Badge de destaque */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Sistema Universal de Agendamentos
            </div>
            
            {/* Título principal */}
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Transforme a gestão do seu negócio
            </h1>
            
            {/* Descrição */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              Agendamentos inteligentes para clínicas, salões, oficinas e qualquer tipo de negócio. 
              Simples, profissional e escalável.
            </p>
            
            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Botão primário - Começar grátis */}
              <Link to="/dashboard">
                <Button size="lg" className="gradient-primary text-lg px-8">
                  Começar Grátis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              {/* Botão secundário - Demonstração */}
              <Button size="lg" variant="outline" className="text-lg px-8">
                Ver Demonstração
              </Button>
            </div>
          </div>
          
          {/* Coluna da imagem */}
          <div className="relative animate-fade-in">
            {/* Efeito de fundo gradiente com blur */}
            <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full" />
            {/* 
              absolute: posicionamento absoluto
              inset-0: ocupa todo o espaço do container pai
              gradient-primary: aplica gradiente primário
              opacity-20: 20% de opacidade
              blur-3xl: efeito de desfoque máximo
              rounded-full: bordas completamente arredondadas
            */}
            
            {/* Imagem do dashboard */}
            <img
              src={heroImage}
              alt="Dashboard Agendify"
              className="relative rounded-2xl shadow-elevated border border-border"
              /* 
                relative: posicionamento relativo para ficar acima do efeito de fundo
                rounded-2xl: bordas bem arredondadas
                shadow-elevated: sombra elevada personalizada
                border: borda
                border-border: cor da borda do tema
              */
            />
          </div>
        </div>
      </section>

      {/* Seção de Recursos */}
      <section id="features" className="bg-muted/30 py-20">
        {/* 
          id="features": âncora para navegação
          bg-muted/30: fundo com cor secundária em 30% de opacidade
          py-20: padding vertical grande (5rem)
        */}
        
        <div className="container mx-auto px-4">
          {/* Cabeçalho da seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recursos completos para gestão profissional de agendamentos
            </p>
          </div>
          
          {/* Grid de recursos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 
              grid: layout de grid
              md:grid-cols-2: 2 colunas em tablets
              lg:grid-cols-4: 4 colunas em desktop
              gap-8: espaçamento entre cards
            */}
            
            {/* Mapeia cada recurso para um card */}
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-elevated transition-all animate-fade-in"
                /* 
                  bg-card: cor de fundo do card
                  p-6: padding interno
                  rounded-xl: bordas extra arredondadas
                  shadow-card: sombra do card
                  hover:shadow-elevated: sombra maior no hover
                  transition-all: transição suave para todas as propriedades
                  animate-fade-in: animação de entrada
                */
                style={{ animationDelay: `${index * 0.1}s` }}
                /* Delay progressivo para animação em cascata */
              >
                {/* Ícone do recurso */}
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Título do recurso */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                
                {/* Descrição do recurso */}
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Coluna de benefícios */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Por que escolher o Agendify?
              </h2>
              <p className="text-xl text-muted-foreground">
                Mais de 10.000 empresas já transformaram sua gestão de agendamentos
              </p>
              
              {/* Grid de lista de benefícios */}
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    {/* Ícone de check */}
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    {/* Texto do benefício */}
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Coluna do processo de cadastro */}
            <div className="bg-card p-8 rounded-2xl shadow-elevated">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Comece hoje mesmo
              </h3>
              
              {/* Passos do processo */}
              <div className="space-y-4">
                {/* Passo 1 */}
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <span className="text-foreground">Crie sua conta grátis</span>
                </div>
                
                {/* Passo 2 */}
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <span className="text-foreground">Configure seus serviços</span>
                </div>
                
                {/* Passo 3 */}
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <span className="text-foreground">Comece a receber agendamentos</span>
                </div>
              </div>
              
              {/* Botão de call-to-action */}
              <Link to="/dashboard">
                <Button size="lg" className="w-full mt-6 gradient-primary">
                  Criar Conta Grátis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer/Rodapé */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          {/* Grid de colunas do footer */}
          <div className="grid md:grid-cols-4 gap-8">
            {/* Coluna 1: Logo e descrição */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg gradient-primary" />
                <span className="text-xl font-bold text-foreground">Agendify</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Sistema universal de agendamentos para qualquer tipo de negócio.
              </p>
            </div>
            
            {/* Coluna 2: Links de produto */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Demonstração</a></li>
              </ul>
            </div>
            
            {/* Coluna 3: Links da empresa */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contato</a></li>
              </ul>
            </div>
            
            {/* Coluna 4: Links de suporte */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Ajuda</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Termos</a></li>
              </ul>
            </div>
          </div>
          
          {/* Rodapé do footer - copyright */}
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 Agendify. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}