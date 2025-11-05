// backend/utils/response.js
// Arquivo utilitário para padronizar as respostas da API
// Funções para enviar respostas de sucesso e erro de forma consistente

// Exporta a função para enviar respostas de sucesso
// Esta função padroniza o formato de todas as respostas bem-sucedidas da API
export function sendSuccess(res, data = null, message = "OK") {
  // Retorna uma resposta JSON com formato padronizado
  return res.json({ 
    success: true,    // Indica que a requisição foi bem-sucedida
    message,          // Mensagem descritiva do resultado (usa valor padrão "OK" se não fornecido)
    data              // Dados retornados pela operação (pode ser null, array, objeto, etc.)
  });
  // Exemplo de resposta:
  // {
  //   "success": true,
  //   "message": "Usuário criado com sucesso",
  //   "data": { id: 1, name: "João" }
  // }
}

// Exporta a função para enviar respostas de erro
// Esta função padroniza o formato de todas as respostas de erro da API
export function sendError(res, errorMessage = "Erro", status = 400, details = null) {
  // Cria o objeto base da resposta de erro
  const payload = { 
    success: false,     // Indica que a requisição falhou
    error: errorMessage // Mensagem de erro principal (usa valor padrão "Erro" se não fornecido)
  };
  
  // Adiciona detalhes do erro apenas se eles foram fornecidos
  // Isso evita incluir a propriedade "details" quando é null/undefined
  if (details) payload.details = details;
  // details pode conter:
  // - Mensagem de erro técnica do banco de dados
  // - Stack trace em ambiente de desenvolvimento
  // - Informações adicionais sobre a validação que falhou
  
  // Retorna uma resposta JSON com status HTTP específico e o payload formatado
  return res.status(status).json(payload);
  // Exemplo de resposta:
  // Status: 400
  // {
  //   "success": false,
  //   "error": "Email já cadastrado",
  //   "details": "Violação de chave única na tabela users"
  // }
}