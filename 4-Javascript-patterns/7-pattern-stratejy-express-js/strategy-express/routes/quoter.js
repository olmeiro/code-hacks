var express = require('express');
var router = express.Router();

const QuoterContext = require('../quoter/quotercontext');
const LocalStrategy = require('../quoter/localstrategy');
const LocalTaxtStrategy = require('../quoter/localtaxstrategy');

const GAIN = 1.3;
const IVA = 0.16;

router.get('/local', function(req, res, next){
  const quoter = new QuoterContext(new LocalStrategy, GAIN);
  const amount = req.query.amount;
  const total = quoter.quote(amount)

  res.json(total);
});

router.get('/localtax', function(req, res, next){
  const quoter = new QuoterContext(new LocalTaxtStrategy(IVA), GAIN);
  const amount = req.query.amount;
  const total = quoter.quote(amount)

  res.json(total);
});

module.exports = router;

// localhost:3000/quoter/local?amount=10
// localhost:3000/quoter/localtax?amount=10