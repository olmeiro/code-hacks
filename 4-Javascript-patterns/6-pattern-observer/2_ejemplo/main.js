// https://github.com/fbeline/design-patterns-JS/blob/master/docs.md#observer
// before ES6

function Product() {
  this.price = 0;
  this.actions = [];
}

Product.prototype.setBasePrice = function(val) {
  this.price = val; 
  this.notifyAll();
}

Product.prototype.register = function(observer) {
  this.actions.push(observer)
}

Product.prototype.unregister = function(observer) {
  this.actions = this.actions.filter(function(el) {
    return el != observer;
  })
}

Product.prototype.notifyAll = function() {
  return this.actions.forEach(function(el) {
    el.update(this);
  }.bind(this));
}

var fees = { // tarifas - honorarios - cuotas
  update: function(product) {
    product.price = product.price * 1.2;
  }
}

var proft = {
  update: function(product) {
    product.price = product.price * 2
  }
}

module.exports = [Product, fees, proft]


// test code:

const expect = require('chai').expect;
const [Product, fees, proft] = require('../src/behavioral/observer/observer.js');

function register(p, f, t) {
  p.register(f);
  p.register(t);
  return p;
}

describe('Observer test', () => {

  it('Subscribers are triggered', () => {
    let product = register(new Product(), fees, proft);
    product.setBasePrice(100);
    expect(product.price).to.equal(240);
  });

  it('We are able to unregister a subscriber', () => {
    let product = register(new Product(), fees, proft);
    product.unregister(proft);

    product.setBasePrice(100);
    expect(product.price).to.equal(120)
  })

});