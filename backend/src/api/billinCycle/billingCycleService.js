const BillingCycle = require('./billinCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);

BillingCycle.updateOptions({
  new: true,
  runValidate: true,
});

BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((error, value) => {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      return res.status(200).json({value})
    }
  }) 
})

module.exports = BillingCycle
