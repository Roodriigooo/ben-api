// server.js (CommonJS)
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({ static: 'public' });

// middlewares (logger, CORS, servir /public, etc.)
server.use(middlewares);

// rota para retornar o DB completo (útil pra testar no navegador)
server.get('/db', (req, res) => {
  res.jsonp(router.db.getState());
});

// demais rotas do db.json (/services, /testimonials, ...)
server.use(router);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`JSON Server rodando em :${port}`);
});
