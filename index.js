const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/src/index.html'));
})

app.use('/', router);
app.use(express.static(__dirname + '/src/css'));
app.use(express.static(__dirname + '/src/scripts'));
app.use(express.static(__dirname + '/src/img'));



app.listen(process.env.port || 3000);

console.log('server rodando')