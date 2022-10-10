(() => {
  // alias y tipos literales:
  // let userId : string | number ; //como manejar esto agregando mas tipos?

  // function greeting(myText: string | number) {
  //   // para que la funcion actue de acuerdo al tipado del argument
  //   if(typeof myText === 'string'){
  //     console.log("ahora soy string con mis metodos", myText.toLocaleLowerCase())
  //   }else{
  //     console.log("ahora soy número",  myText.toFixed(1))
  //   }
  // }

  //podemos crear nuestros propios tipos

  type  UserId = string | number ;

  let userId : UserId

  // function greeting(myText: UserId) {
  //   // para que la funcion actue de acuerdo al tipado del argument
  //   if(typeof myText === 'string'){
  //     console.log("ahora soy string con mis metodos", myText.toLocaleLowerCase())
  //   }else{
  //     console.log("ahora soy número",  myText.toFixed(1))
  //   }
  // }

  // Literal types:

  // let shirtSize: string;
  // shirtSize = 'M'
  // shirtSize = 's'
  // shirtSize = 'L'
  // shirtSize = 'XL'

  // usando literal types:
  // let shirtSize: 'S' | 'M' | 'L' | 'XL';
  // shirtSize = 'M'
  // shirtSize = 's'
  // shirtSize = 'L' // no cumple el literal type
  // shirtSize = 'XxdfL' // no cumple el literal type

  //Usando nuestro propio tipo:
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M'
  shirtSize = 's'
  shirtSize = 'L' // no cumple el literal type
  shirtSize = 'XxdfL'


  function greeting(myText: UserId, size: Sizes) {
    // para que la funcion actue de acuerdo al tipado del argument
    if(typeof myText === 'string'){
      console.log("ahora soy string con mis metodos", myText.toLocaleLowerCase())
    }else{
      console.log("ahora soy número",  myText.toFixed(1))
    }
  }

  greeting('1111', 'L')
  greeting(1111, 'Lsss')




})()
