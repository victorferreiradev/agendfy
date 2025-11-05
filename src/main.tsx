// Importa a biblioteca React - necessária para escrever componentes React
// 'React' é o objeto principal que contém todas as funcionalidades do React
import React from 'react'

// Importa ReactDOM do pacote 'react-dom/client' - versão moderna para React 18+
// ReactDOM é responsável por renderizar componentes React no DOM do navegador
// A versão 'client' é específica para aplicações no lado do cliente (navegador)
import ReactDOM from 'react-dom/client'

// Importa o componente principal da aplicação
// App é o componente raiz que contém toda a estrutura da aplicação
// '.tsx' indica que é um arquivo TypeScript com JSX
import App from './App.tsx'

// Importa o arquivo CSS global da aplicação
// Este arquivo contém estilos base e importações do Tailwind CSS
import './index.css'

// Debug info - Mensagens de console para desenvolvimento
// Estas linhas ajudam no debugging durante o desenvolvimento
console.log('🚀 React App iniciando...');
// Exibe um emoji de foguete e mensagem indicando que a aplicação está iniciando

console.log('📡 API_URL:', import.meta.env.VITE_API_URL);
// Exibe a URL da API configurada nas variáveis de ambiente
// 'import.meta.env' é a forma do Vite de acessar variáveis de ambiente
// 'VITE_API_URL' é uma variável de ambiente prefixada com VITE_ (requisito do Vite)
// O emoji de antena indica configuração de rede/API

console.log('🎨 Tailwind carregado');
// Confirma que o Tailwind CSS foi carregado com sucesso
// O emoji de paleta indica estilização/design

// Cria uma raiz (root) React no elemento DOM com id 'root'
// document.getElementById('root') encontra o elemento HTML com id="root"
// A exclamação (!) é um non-null assertion do TypeScript - garante que o elemento existe
// createRoot() é a API moderna do React 18 para criar raizes de renderização
// Esta raiz será o ponto de entrada onde o React renderizará toda a aplicação
ReactDOM.createRoot(document.getElementById('root')!)
// Inicia a renderização da aplicação React
// O método .render() recebe o JSX que será renderizado na raiz
.render(
  // React.StrictMode é um componente especial do React para desenvolvimento
  // Ele ajuda a identificar problemas potenciais na aplicação
  <React.StrictMode>
    {/* 
      React.StrictMode faz o seguinte durante o desenvolvimento:
      1. Verifica componentes com APIs descontinuadas
      2. Detecta efeitos colaterais inesperados
      3. Avisa sobre práticas não recomendadas
      4. Executa algumas funções duas vezes para detectar impurezas
      (Isso só acontece em desenvolvimento, não em produção)
    */}
    
    {/* Renderiza o componente App como filho do StrictMode */}
    <App />
    {/* 
      App é o componente principal que contém:
      - Sistema de roteamento
      - Providers (Theme, Auth, etc.)
      - Estrutura geral da aplicação
    */}
  </React.StrictMode>,
  // A vírgula no final é parte da sintaxe do método .render()
  // Separa os parâmetros do método (embora aqui só tenha um parâmetro)
)