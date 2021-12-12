const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/src/index.html'));
})

router.get('/sobre', function (req, res) {
    res.sendFile(path.join(__dirname+'/src/sobre.html'));
})

router.get('/contato', function (req, res) {
    res.sendFile(path.join(__dirname+'/src/contato.html'));
})

router.get('/trabalhoPaisagem', function (req, res) {
    res.sendFile(path.join(__dirname+'/src/trab-paisagens.html'));
})

router.get('/trabalhoCar', function (req, res) {
    res.sendFile(path.join(__dirname+'/src/trab-carros.html'));
})

app.use('/', router);
app.use(express.static(__dirname + '/src/css'));
app.use(express.static(__dirname + '/src/scripts'));
app.use(express.static(__dirname + '/src/img'));



app.listen(process.env.port || 3000);

console.log('server rodando')