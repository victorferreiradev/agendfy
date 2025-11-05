// Importa toda a biblioteca React como um objeto chamado React
// Isso nos dá acesso a useState, useEffect, e outros hooks
import * as React from "react";

// Define uma constante para o breakpoint de dispositivos móveis
// 768px é um valor comum - geralmente tablets são 768px+ e mobile é abaixo disso
const MOBILE_BREAKPOINT = 768;

// Exporta um custom hook chamado useIsMobile
// Custom hooks são funções que usam outros hooks do React
export function useIsMobile() {
  // Cria um estado para armazenar se a tela é mobile ou não
  // O tipo é boolean | undefined porque inicialmente não sabemos
  // undefined no início, depois se torna true ou false
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  // useEffect hook para executar efeitos colaterais (side effects)
  // O array vazio [] como segundo parâmetro significa que este efeito
  // executa apenas uma vez - quando o componente é montado
  React.useEffect(() => {
    // Cria um MediaQueryList object que monitora a condição de mídia CSS
    // (max-width: 767px) - ou seja, telas com largura máxima de 767px
    // MOBILE_BREAKPOINT - 1 = 768 - 1 = 767
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Define a função que será chamada quando o tamanho da tela mudar
    const onChange = () => {
      // Atualiza o estado baseado na largura atual da janela
      // Se a largura for menor que o breakpoint, é mobile
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Adiciona um event listener para o evento "change" do MediaQueryList
    // Isso vai chamar a função onChange sempre que a condição de mídia mudar
    // (ou seja, quando a tela cruzar o breakpoint de 767px)
    mql.addEventListener("change", onChange);

    // Define o valor inicial do estado baseado na largura atual da tela
    // Isso é necessário porque o event listener só dispara quando há mudanças
    // Precisamos definir o estado correto logo quando o componente monta
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    // Função de cleanup que será executada quando o componente desmontar
    // Remove o event listener para evitar memory leaks
    return () => mql.removeEventListener("change", onChange);
  }, []); // Array de dependências vazio - executa apenas na montagem

  // Retorna o valor convertido para boolean estrito
  // !! converte qualquer valor para boolean:
  // - undefined → false
  // - true → true
  // - false → false
  // Isso garante que sempre retornamos um boolean puro
  return !!isMobile;
}