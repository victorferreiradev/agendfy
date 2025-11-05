// Update this page (the content is just a fallback if you fail to update the page)
// Comentário para desenvolvedores: Esta página é uma página de fallback/placeholder
// Deve ser atualizada com conteúdo real da aplicação

// Define um componente funcional chamado Index
// Este é um componente React que representa a página inicial
const Index = () => {
  // Retorna o JSX (JavaScript XML) que define a estrutura e aparência do componente
  return (
    // Div principal que ocupa toda a altura da tela com fundo e centralização
    <div className="flex min-h-screen items-center justify-center bg-background">
      {/* 
        flex: Ativa o layout flexbox
        min-h-screen: Altura mínima de 100% da viewport (tela inteira)
        items-center: Centraliza os itens verticalmente no container flex
        justify-center: Centraliza os itens horizontalmente no container flex  
        bg-background: Aplica a cor de fundo definida no tema do sistema
      */}
      
      {/* Container para o conteúdo textual centralizado */}
      <div className="text-center">
        {/* 
          text-center: Centraliza o texto horizontalmente dentro deste container
        */}
        
        {/* Título principal da página */}
        <h1 className="mb-4 text-4xl font-bold">
          Welcome to Your Blank App
          {/* 
            mb-4: Margin-bottom de 1rem (16px) - espaçamento abaixo do título
            text-4xl: Tamanho de texto extra grande (2.25rem / 36px)
            font-bold: Peso da fonte negrito para destaque
          */}
        </h1>
        
        {/* Subtítulo/descrição */}
        <p className="text-xl text-muted-foreground">
          Start building your amazing project here!
          {/* 
            text-xl: Tamanho de texto grande (1.25rem / 20px)
            text-muted-foreground: Cor de texto secundária/atenuada do tema
            (Geralmente um cinza mais claro que o texto principal)
          */}
        </p>
      </div>
    </div>
  );
};

// Exporta o componente Index como padrão para ser usado em outros arquivos
// Isso permite importar este componente em outros arquivos como:
// import Index from './caminho/para/este/arquivo';
export default Index;