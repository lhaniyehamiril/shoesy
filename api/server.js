import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'dataShoes.json'));
const middlewares = jsonServer.defaults();

server.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });
  next();
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use('/api', router);

server.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

server.use((err, req, res, next) => {
  console.error('Internal server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
}).on('error', (err) => {
  console.error('Failed to start server:', err.message);
  if (err.code === 'EADDRINUSE') {
    console.log('Port 5000 is in use. Try a different port or free it up.');
  }
});

export default server;