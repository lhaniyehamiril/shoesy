import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

// defining __filename , __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// creating json server
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '../api/dataShoes.json'));
const middlewares = jsonServer.defaults();

// using middleware
server.use(middlewares);
server.use(jsonServer.bodyParser);

// defining routs 
server.use('/api', router);

// setting up server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});