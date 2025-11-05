// Importa o tipo ClassValue e a função clsx da biblioteca clsx
// clsx é uma utilitária para condicionalmente juntar classes CSS
import { type ClassValue, clsx } from "clsx";

// Importa a função twMerge da biblioteca tailwind-merge
// tailwind-merge mescla classes do Tailwind CSS conflitantes inteligentemente
import { twMerge } from "tailwind-merge";

// Exporta uma função utilitária chamada cn (className)
// Esta função combina o poder do clsx com tailwind-merge
export function cn(...inputs: ClassValue[]) {
  // Retorna o resultado da combinação das duas bibliotecas:
  // 1. Primeiro usa clsx para juntar todas as classes condicionalmente
  // 2. Depois usa twMerge para resolver conflitos entre classes do Tailwind
  return twMerge(clsx(inputs));
}