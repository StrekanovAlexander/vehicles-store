import express from 'express';
const app = express();

app.get('/', (req, res) => res.send('Vehicles Store Application 2'));

app.listen(3000);