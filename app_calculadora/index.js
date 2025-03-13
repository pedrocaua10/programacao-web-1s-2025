const express = require('express');
const calc = require('./calculadora');
const app = express();

//Define uma rota "/ola"
app.get('/ola', (req, res)=>{
    res.send('Hello, world!');
});

//Define uma rota "/ola/:param"
app.get('/ola/:nome', (req, res)=>{
    res.send('Olá, ' + req.params.nome);
});

//define uma porta e inicia o processo de escuta
// de requisições na porta
const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});
