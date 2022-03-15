import express from 'express';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') dotenv.config();

/* Definitions */

const { pathname: __dirname } = new URL('../ejercicios_ajax', import.meta.url);

const PORT = process.env.PORT || 3556;

const app = express();

/* Settings */

app.use(express.static(__dirname));

app.listen(PORT, () => console.log('Server up on port ' + PORT));

/* Endpoints */

app.get('/', (req, res) => {
   return res.sendFile(__dirname + '/ejercicio_1.html');
});

app.get('/ajax/stripe_checkout', (req, res) => {
   return res.sendFile(__dirname + '/templates/stripe_checkout.html');
});

app.get('/ajax/poke_api', (req, res) => {
   return res.sendFile(__dirname + '/templates/poke_api.html');
});
