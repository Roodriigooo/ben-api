// server.js (ESM)
import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ static: 'public' });

// middlewares (logger, CORS, /public, etc.)
server.use(middlewares);

// rota para retornar o DB completo
server.get('/db', (req, res) => {
  res.jsonp(router.db.getState());
});

// demais rotas do db.json
server.use(router);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`JSON Server rodando em :${port}`);
});
