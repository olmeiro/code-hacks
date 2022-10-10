import { addProduct, calcStock, products } from './product.service';

addProduct({ name: 'Product1', createdAt: new Date(1993, 1, 1), stock: 12 });
addProduct({ name: 'Product2', createdAt: new Date(1993, 1, 1), stock: 12 });

console.log(products)
const total = calcStock();
console.log(total)
