// Importa a biblioteca jsonwebtoken que permite trabalhar com JWT (JSON Web Tokens)
import jwt from "jsonwebtoken";

// Exporta uma função middleware para autenticação de tokens
// Middleware no Express.js é uma função que tem acesso aos objetos req (requisição), res (resposta) e next (próxima função)
export function authenticateToken(req, res, next) {
  
  // Obtém o cabeçalho de autorização da requisição HTTP
  // Os cabeçalhos são enviados pelo cliente (normalmente frontend) no formato: Authorization: Bearer <token>
  const authHeader = req.headers["authorization"];
  
  // Extrai o token do cabeçalho de autorização
  // authHeader.split(" ") divide a string pelo espaço, criando um array: ["Bearer", "<token>"]
  // [1] acessa o segundo elemento do array, que é o token em si
  // O operador && (AND) garante que só tenta fazer o split se authHeader existir
  const token = authHeader && authHeader.split(" ")[1]; // Formato: "Bearer <token>"

  // Verifica se o token não existe (é null, undefined, ou string vazia)
  // Se não houver token, retorna status 401 (Unauthorized) com uma mensagem de erro
  if (!token) return res.status(401).json({ error: "Token não fornecido" });

  // Verifica a validade do token usando a biblioteca JWT
  // jwt.verify() é uma função que valida o token e decodifica suas informações
  jwt.verify(
    token, // Primeiro parâmetro: o token a ser verificado
    process.env.JWT_SECRET, // Segundo parâmetro: a chave secreta usada para assinar o token (armazenada em variável de ambiente)
    (err, user) => { // Terceiro parâmetro: função callback que é executada após a verificação
      
      // Se ocorrer um erro na verificação (token inválido, expirado, etc.)
      if (err) return res.status(403).json({ error: "Token inválido" });
      
      // Se o token for válido, as informações decodificadas são armazenadas no objeto 'user'
      // Essas informações normalmente incluem id, email, roles, etc., que foram colocadas no token quando ele foi criado
      req.user = user;
      
      // Chama a próxima função/middleware na cadeia do Express.js
      // Isso permite que a requisição continue para o controller ou próximo middleware
      next();
    }
  );
}