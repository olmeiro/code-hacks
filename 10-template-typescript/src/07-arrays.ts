(() => {
  let prices = [1,2,3,4];
  prices.push('asas')
  prices.push(true)
  prices.push({})

  prices.push(10)
  prices = [9,8,7]

  let array = [1,2,3, 'hola', true]
  let products = ['banano', 2000]
  products.push(true)

  // para que el array soporte cualquier tipo:
  let mixed: (number | string | boolean )[] = ['hola', true]
  mixed.push(12)
  mixed.push([])
  mixed.push({})

  let numbers = [1,2,3,4];
  numbers.map(item => item * 2 )


})()
