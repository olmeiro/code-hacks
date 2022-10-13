(() => {

  // const login = (email: string, password: string) => {
  //   console.log(email, password)
  // }

  // login('olme@gmail.com', '12345') // que pasa si tenemos muchos parametros? cambiamos por objetos.


  //usando objetos:

  const login = (dto: {email: string, password: number}) => {
    console.log(dto.email, dto.password)
  }
  login({
    email: 'olme@gmail.com',
    password: 1123
  })

  //usando algo mas real

  type Sizes = 'S' | 'M' | 'L' | 'XL'

  const products: any[] = []; // solo para el ejerccio: any

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
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

  console.log("products: ", products)


})()
