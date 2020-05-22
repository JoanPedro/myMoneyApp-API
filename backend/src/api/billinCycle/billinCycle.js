/* Mapeamento ODM - Objeto Documento. Com 3 "Schemas", apesar de não possuir schema, 
o mongo permite realizar o mapeamento ODM para poder realizar algumas validações
pre-definas automaticamente. */

const restful = require('node-restful');
const mongoose = restful.mongoose;

const creditSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, 'O Atributo name é obrigatório.'],
  },
  value: {
    type: Number,
    min: 0,
    required: [true, 'O Atributo value é obrigatório'],
  }
}) 

const debtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O Atributo name é obrigatório.'],
  },
  value: {
    type: Number,
    min: 0,
    required: [true, 'O Atributo value é obrigatório'],
  },
  status: {
    type: String,
    required: false,
    upperCase: true,
    enum: ['PAGO', 'PENDENTE', 'AGENDADO']
  },
})

const billingCycleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O Atributo name é obrigatório'],
  },
  month: {
    type: Number,
    min: 1,
    max: 12,
    required: [true, 'O Atributo month é obrigatório'],
  },
  year: {
    type: Number,
    min: 1970,
    max: 2100,
    required: [true, 'O Atributo year é obrigatório'],
  },
  credits: [creditSchema],
  debts: [debtSchema],
})

module.exports = restful.model('BillingCycle', billingCycleSchema)