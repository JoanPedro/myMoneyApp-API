const express = require('express');

module.exports = (server) => {
  // Define URL Base -> Todos serviços irão começar com '/api'.
  const router = express.Router()
  server.use('/api', router)

  // Rotas de ciclo de pagamento.
  const BillingCycle = require('../api/billinCycle/billingCycleService');
  BillingCycle.register(router, '/billingCycles')
}