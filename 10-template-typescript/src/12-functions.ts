(() => {
  //est es javascript:
  const myFunc = (a,b) => a + b;
  myFunc() //NaN
  myFunc(1) //NaN
  myFunc(1,2) //3
  myFunc(1,2,3) //3 tenemos un comportamiento raro en js

  //ahora con ts:
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createAt: Date, // unica excepción usando objeto Date
    stock: number,
    size: Sizes // size es de tipo Sizes
  ){
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const product1 = createProductToJson('P1', new Date(), 12, 'XL')
  console.log(product1)
  console.log(product1.title)
  console.log(product1.createAt)
  console.log(product1.size)

  const createProductToJsonV2 = (  //mas usadas las arrow functions
    title: string,
    createAt: Date, // unica excepción usando objeto Date
    stock: number,
    size: Sizes | undefined // size esta definida
  ) => {
    return {
      title,
      createAt,
      stock,
      size
    }
  }
  const producto2 = createProductToJsonV2('P1', new Date(), 12, undefined)
  console.log(producto2.title)
  console.log(producto2.createAt)
  console.log(producto2.stock)
  console.log(producto2.size)

  const createProductToJsonV3 = (  //mas usadas las arrow functions
    title: string,
    createAt: Date, // unica excepción usando objeto Date
    stock: number,
    size?: Sizes //size es opcional
  ) => {
    return {
      title,
      createAt,
      stock,
      size
    }
  }
  const producto3 = createProductToJsonV3('P1', new Date(), 12);
  console.log(producto3.title)
  console.log(producto3.createAt)
  console.log(producto3.stock)
  console.log(producto3.size)

})();
