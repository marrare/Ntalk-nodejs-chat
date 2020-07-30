const express = require('express');
const path = require('path');
const consign = require('consign');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

consign({}) // Possibilita injetar modulos dependentes em uma variável
  .include('src/models')
  .then('src/controllers')
  .then('src/routes')
  .into(app)
;

app.listen(3000, () => {
  console.log('Ntalk no ar');
});