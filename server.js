// server.js (CommonJS)
const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, 'public') // serve /public na raiz
});

// middlewares (logger, CORS, static, etc.)
server.use(middlewares);

// endpoint para retornar o DB inteiro
server.get('/db', (req, res) => {
  res.jsonp(router.db.getState());
});

// demais rotas do db.json (/services, /testimonials, ...)
server.use(router);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`JSON Server rodando em :${port}`);
});
