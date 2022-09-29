function LocalTaxtStrategy(tax){
  this.tax = tax;

  this.quote = function(amount, gain){
    return (amount * gain) + (amount * tax);
  }
}

module.exports = LocalTaxtStrategy;