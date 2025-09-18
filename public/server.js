// server.js
import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ static: 'public' });

// middlewares (logger, CORS, static /public, etc.)
server.use(middlewares);

// Rota manual para retornar o conteúdo completo do banco
server.get('/db', (req, res) => {
  res.jsonp(router.db.getState());
});

// Demais rotas geradas a partir do db.json
server.use(router);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`JSON Server rodando em :${port}`);
});
