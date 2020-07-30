const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const consign = require('consign');

const app = express();
const server = http.Server(app); // socket.io precisa utilizar esse mesmo listener para comunicação.
const io = socketIO(server);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

consign({}) // Possibilita injetar modulos dependentes em uma variável
  .include('src/models')
  .then('src/controllers')
  .then('src/routes')
  .then('events')
  .into(app, io)
;

server.listen(3000, () => {
  console.log('Ntalk no ar');
});