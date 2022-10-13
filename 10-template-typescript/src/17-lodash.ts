// lodash no tiene sistema de tipos.
// instalacion: npm i lodash
// no utiliza import y export

//transformamos esta linea
// var _ = require('lodash')
//en:
import _ from 'lodash'

// instalamos los tipos: npm i --save-dev @types/lodash
const data = [
  {
    username: 'nico',
    role: 'admin'
  },
  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'zulema',
    role: 'seller'
  },
  {
    username: 'diana',
    role: 'customer'
  }
]

const rta = _.groupBy(data, (item) => item.role);
console.log(rta)
