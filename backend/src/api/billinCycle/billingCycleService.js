const BillingCycle = require('./billinCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);

BillingCycle.updateOptions({
  new: true,
  runValidate: true,
});
<<<<<<< HEAD
BillingCycle.after('post', errorHandler).after('put', errorHandler).after('get', errorHandler);
=======
>>>>>>> parent of a75b7ad... Adiciona Error Handler

BillingCycle.route('count', (req, res, next) => {
  BillingCycle.countDocuments((error, value) => {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      return res.status(200).json({value})
    }
  }) 
})

module.exports = BillingCycle
