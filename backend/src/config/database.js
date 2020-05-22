const mongoose = require('mongoose');
mongoose.Promise = global.Promise

mongoose.Error.messages.general.required = "O Atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = 
  "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'." 
mongoose.Error.messages.Number.max = 
  "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'." 
mongoose.Error.messages.String.enum = 
  "'{VALUE' não é válido para o atributo '{PATH}' ."

module.exports = mongoose.connect('mongodb://localhost/mymoney', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(_=> console.log(`Sucesso em Conectar com o MongoDB`))
  .catch(e => console.log(`Error: ${e}`))
