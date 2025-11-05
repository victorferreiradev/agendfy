// Importa a biblioteca jsonwebtoken que permite criar e verificar tokens JWT
import jwt from 'jsonwebtoken';

// Define a chave secreta para verificar os tokens JWT
// Primeiro tenta pegar do ambiente (process.env.JWT_SECRET) - mais seguro
// Se não existir, usa uma chave padrão como fallback (menos seguro para produção)
const JWT_SECRET = process.env.JWT_SECRET || 'sua_chave_secreta_aqui';

// Exporta a função middleware de autenticação para ser usada em outras partes da aplicação
export const authenticateToken = (req, res, next) => {
  
  // Obtém o cabeçalho de autorização da requisição HTTP
  // O cliente deve enviar: Authorization: Bearer <token>
  const authHeader = req.headers['authorization'];
  
  // Extrai o token do cabeçalho usando optional chaining (?.)
  // authHeader?.split(' ') - só executa split se authHeader não for null/undefined
  // [1] pega a segunda parte do array resultante do split (o token em si)
  // Formato esperado: "Bearer tokendefacto123456"
  const token = authHeader?.split(' ')[1];

  // Verifica se o token não existe
  // Se não houver token, retorna erro 401 (Não Autorizado) e para a execução
  if (!token) return res.status(401).json({ error: 'Token ausente.' });

  // Verifica a validade e autenticidade do token JWT
  jwt.verify(
    token,        // Primeiro parâmetro: o token a ser verificado
    JWT_SECRET,   // Segundo parâmetro: a chave secreta para validar a assinatura
    (error, user) => { // Terceiro parâmetro: função callback executada após a verificação
      
      // Se houve erro na verificação (token inválido, expirado, etc.)
      if (error) return res.status(403).json({ error: 'Token inválido ou expirado.' });
      
      // Se o token é válido, armazena as informações do usuário decodificadas
      // no objeto req (requisição) para uso nas rotas/middlewares seguintes
      // 'user' contém os dados que foram colocados no token quando ele foi criado
      req.user = user;
      
      // Chama a próxima função/middleware na cadeia do Express
      // Permite que a requisição continue para o controller ou próximo middleware
      next();
    }
  );
};