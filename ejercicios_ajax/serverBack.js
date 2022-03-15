import dotenv from 'dotenv';
import express, { json, urlencoded } from 'express';
import { extname } from 'path';
import multer, { diskStorage } from 'multer';
import cors from 'cors';
import { setTimeout } from 'timers';

dotenv.config();

const PORT = process.env.PORT || 3333;

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

let storage = diskStorage({
   destination: (req, file, callback) => {
      callback(null, './assets/files');
   },
   filename: (req, file, callback) => {
      const extension = extname(file.originalname);
      const now = new Date();
      const date = `${now.getDate()}-${now.getMonth()}-${now.getFullYear()}-${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
      callback(null, `${file.originalname.replace(extension, '')}-${date}${extension}`);
   },
});

const upload = multer({ storage });

app.get('/', (req, res) => {
   return res.send('Operación exitosa');
});

app.post('/subir', upload.array('files'), (req, res) => {
   console.log(`Dirección de almacenamiento: ${req.hostname}/`);
   return res.send(req.files);
});

app.post('/form', (req, res) => {
   req.headers['access-control-allow-origin'] = '*'; // Header for access to third api
   setTimeout(() => {
      return res.send({ message: 'Éxito' });
   }, 2000);
});

app.listen(PORT, () => console.log(`Server is up on port ${PORT}`));
