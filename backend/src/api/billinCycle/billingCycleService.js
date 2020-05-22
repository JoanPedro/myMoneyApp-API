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

BillingCycle.route('summary', (req, res, next) => {
  BillingCycle.aggregate([{ 
      $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} 
  }, { 
      $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
  }, { 
      $project: {_id: 0, credit: 1, debt: 1}
  }], (error, result) => {
      if(error) {
          res.status(500).json({errors: [error]})
      } else {
          res.status(200).json(result[0] || {credit: 0, debt: 0})
      }
  })
})

module.exports = BillingCycle
