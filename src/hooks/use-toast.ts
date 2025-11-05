// Importa toda a biblioteca React
import * as React from "react";

// Importa tipos TypeScript para os componentes de Toast
import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

// Define constantes para configurar o sistema de toasts
const TOAST_LIMIT = 1; // Número máximo de toasts visíveis simultaneamente
const TOAST_REMOVE_DELAY = 1000000; // Delay para remover toast automaticamente (em milissegundos)

// Define o tipo para um toast, combinando as props básicas com campos adicionais
type ToasterToast = ToastProps & {
  id: string; // Identificador único do toast
  title?: React.ReactNode; // Título do toast (opcional)
  description?: React.ReactNode; // Descrição do toast (opcional)
  action?: ToastActionElement; // Ação/button do toast (opcional)
};

// Define os tipos de ações que podem ser disparadas no reducer
const actionTypes = {
  ADD_TOAST: "ADD_TOAST", // Adicionar um novo toast
  UPDATE_TOAST: "UPDATE_TOAST", // Atualizar um toast existente
  DISMISS_TOAST: "DISMISS_TOAST", // Fechar um toast (animação de saída)
  REMOVE_TOAST: "REMOVE_TOAST", // Remover completamente um toast do estado
} as const; // "as const" torna os valores readonly

// Contador global para gerar IDs únicos
let count = 0;

// Função para gerar IDs únicos para os toasts
function genId() {
  // Incrementa o contador e usa módulo para evitar overflow
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString(); // Converte para string
}

// Cria um tipo baseado nas chaves do actionTypes
type ActionType = typeof actionTypes;

// Define todas as ações possíveis no sistema com seus respectivos payloads
type Action =
  | {
      type: ActionType["ADD_TOAST"]; // Ação de adicionar toast
      toast: ToasterToast; // Toast completo a ser adicionado
    }
  | {
      type: ActionType["UPDATE_TOAST"]; // Ação de atualizar toast
      toast: Partial<ToasterToast>; // Toast parcial (apenas campos a serem atualizados)
    }
  | {
      type: ActionType["DISMISS_TOAST"]; // Ação de fechar toast
      toastId?: ToasterToast["id"]; // ID opcional - se não fornecido, fecha todos
    }
  | {
      type: ActionType["REMOVE_TOAST"]; // Ação de remover toast
      toastId?: ToasterToast["id"]; // ID opcional - se não fornecido, remove todos
    };

// Define a interface do estado global
interface State {
  toasts: ToasterToast[]; // Array de toasts ativos
}

// Mapa para armazenar timeouts de remoção automática
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

// Função para adicionar um toast à fila de remoção automática
const addToRemoveQueue = (toastId: string) => {
  // Se já existe um timeout para este toast, não faz nada
  if (toastTimeouts.has(toastId)) {
    return;
  }

  // Cria um novo timeout para remover o toast após o delay
  const timeout = setTimeout(() => {
    // Remove o timeout do mapa
    toastTimeouts.delete(toastId);
    // Dispara ação para remover o toast do estado
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  // Armazena o timeout no mapa para controle
  toastTimeouts.set(toastId, timeout);
};

// Reducer principal - função pura que atualiza o estado baseado nas ações
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state, // Mantém o resto do estado
        // Adiciona novo toast no início e limita pelo TOAST_LIMIT
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        // Atualiza apenas o toast com ID correspondente
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // Efeitos colaterais - adiciona toasts à fila de remoção
      if (toastId) {
        // Adiciona apenas um toast específico à fila de remoção
        addToRemoveQueue(toastId);
      } else {
        // Adiciona todos os toasts à fila de remoção
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        // Marca os toasts como fechados (para animação de saída)
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false, // Fecha o toast (inicia animação de saída)
              }
            : t
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        // Remove todos os toasts
        return {
          ...state,
          toasts: [],
        };
      }
      // Remove apenas o toast com ID específico
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

// Array de listeners (funções que serão notificadas quando o estado mudar)
const listeners: Array<(state: State) => void> = [];

// Estado em memória (fora do React para ser acessível globalmente)
let memoryState: State = { toasts: [] };

// Função dispatch global para disparar ações
function dispatch(action: Action) {
  // Atualiza o estado em memória usando o reducer
  memoryState = reducer(memoryState, action);
  // Notifica todos os listeners sobre a mudança de estado
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

// Tipo Toast sem o campo id (para a função toast)
type Toast = Omit<ToasterToast, "id">;

// Função principal para criar toasts
function toast({ ...props }: Toast) {
  // Gera um ID único para o novo toast
  const id = genId();

  // Função para atualizar este toast específico
  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id }, // Garante que o ID seja mantido
    });

  // Função para fechar este toast específico
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  // Dispara ação para adicionar o novo toast
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props, // Props passadas para a função
      id, // ID único
      open: true, // Abre o toast
      onOpenChange: (open) => {
        // Callback quando o estado "open" muda
        if (!open) dismiss(); // Se foi fechado, dispara dismiss
      },
    },
  });

  // Retorna métodos para controlar este toast específico
  return {
    id: id,
    dismiss, // Função para fechar o toast
    update, // Função para atualizar o toast
  };
}

// Hook personalizado para usar o sistema de toasts
function useToast() {
  // Estado local que será sincronizado com o estado global
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    // Adiciona setState como listener quando o componente monta
    listeners.push(setState);
    
    // Cleanup function - remove o listener quando o componente desmonta
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1); // Remove o listener do array
      }
    };
  }, [state]); // Dependência do estado

  // Retorna o estado e funções úteis
  return {
    ...state, // Espalha o estado (toasts)
    toast, // Função para criar novos toasts
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }), // Função para fechar toasts
  };
}

// Exporta o hook e a função toast para uso em outros arquivos
export { useToast, toast };