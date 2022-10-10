(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL'
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = []; // solo para el ejerccio: any

  const addProduct = (data: Product ) => {
    products.push(data)
  }

  addProduct({
    title: 'Product1',
    createdAt: new Date(1993, 1,1),
    stock: 12
  })
  addProduct({
    title: 'Product2',
    createdAt: new Date(1993, 2,1),
    stock: 12,
    size: 'XL'
  })

  addProduct({ // esto no cumple con la firma del objeto
   algo: 'lakakak'
  })// aunque no cumple la firma del objeto si lo ejecuta pasa derechito.

  products.push('kasksskss') //no cumple con la firma
  products.push({}) //no cumple con la firma

  products.push({
    title: 'Producto 3',
    createdAt: new Date(),
    stock: 120,
    size: 'L'
  })



  console.log("products: ", products)


})()
