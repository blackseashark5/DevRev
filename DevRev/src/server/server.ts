import path from 'path';
import { fileURLToPath } from 'url';
import express, { Express } from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Express = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '../../public')));

app.listen(port);
console.log(`Listening on http://localhost:${port}`);
