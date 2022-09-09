// https://github.com/fbeline/design-patterns-JS

class Product {
  constructor(){
    this.price = 0;
    this.actions = [];
  }

  register(observer){
    this.actions.push(observer)
  }

  unregister(observer) {
    
    // this.actions = this.actions.filter(el => !(el instanceof observer));
    this.actions = this.actions.filter(el => !(el === observer));
  }

  notifyAll() {
    this.actions.forEach(el => {
      el.update(this)
    })
  }

  setBasePrice(val) {
    this.price = val;
    this.notifyAll();
  }
}

class Fees {
  update(product){
    product.price = product.price * 1.2;
  }
}

class Proft {
  update(product){
    product.price = product.price * 2;
  }
}

// export {
//   Product,
//   Fees,
//   Proft
// };

// uso:

function register(p, f, t) {
  p.register(f);
  p.register(t);
  return p;
}

let fees = new Fees()
let proft = new Proft()
let product = new Product()

register(product, fees, proft);

// product.setBasePrice(100);
// console.log(product.price)

product.unregister(proft)
product.setBasePrice(100)
console.log(product.price)

console.log("actions", product.actions)