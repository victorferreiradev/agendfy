// Importa o hook useLocation do React Router para acessar informações da rota atual
import { useLocation } from "react-router-dom";
// Importa o hook useEffect do React para executar efeitos colaterais
import { useEffect } from "react";

// Define um componente funcional chamado NotFound
// Este componente é exibido quando o usuário acessa uma rota que não existe
const NotFound = () => {
  // Usa o hook useLocation para obter informações sobre a rota atual
  // location.pathname contém o caminho da URL que o usuário tentou acessar
  const location = useLocation();

  // Usa o hook useEffect para executar código quando o componente é montado ou quando location.pathname muda
  useEffect(() => {
    // Registra um erro no console para debugging e monitoramento
    // Isso ajuda os desenvolvedores a identificar rotas que os usuários estão tentando acessar mas não existem
    console.error(
      "404 Error: User attempted to access non-existent route:", 
      location.pathname // Exemplo: "/pagina-que-nao-existe"
    );
  }, [location.pathname]); // Array de dependências: o efeito executa sempre que location.pathname muda

  // Retorna o JSX (interface) que será renderizado na tela
  return (
    // Container principal que ocupa toda a altura da tela com fundo cinza
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {/* 
        flex: ativa o layout flexbox para facilitar o posicionamento
        min-h-screen: altura mínima de 100% da viewport (tela inteira)
        items-center: centraliza os itens verticalmente
        justify-center: centraliza os itens horizontalmente
        bg-gray-100: cor de fundo cinza claro
      */}
      
      {/* Container para o conteúdo centralizado */}
      <div className="text-center">
        {/* 
          text-center: centraliza todo o texto horizontalmente dentro deste container
        */}
        
        {/* Código de erro 404 em destaque */}
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        {/* 
          mb-4: margin-bottom de 1rem (16px) - espaçamento abaixo do título
          text-4xl: tamanho de texto extra grande (2.25rem / 36px)
          font-bold: peso da fonte negrito para destaque
        */}
        
        {/* Mensagem amigável para o usuário */}
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        {/* 
          mb-4: margin-bottom de 1rem - espaçamento abaixo do parágrafo
          text-xl: tamanho de texto grande (1.25rem / 20px)
          text-gray-600: cor de texto cinza médio (mais escuro que o fundo)
        */}
        
        {/* Link para retornar à página inicial */}
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          {/* 
            href="/": redireciona para a rota raiz (página inicial) quando clicado
            text-blue-500: cor azul padrão
            underline: sublinhado para indicar que é um link clicável
            hover:text-blue-700: muda para azul mais escuro quando o mouse passa por cima
          */}
          Return to Home
        </a>
      </div>
    </div>
  );
};

// Exporta o componente NotFound como padrão para ser usado em outros arquivos
// Isso permite importar este componente como: import NotFound from './NotFound';
export default NotFound;