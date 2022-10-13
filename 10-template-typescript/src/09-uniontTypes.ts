(() => {
  let userId: string | number;
  userId = 123;
  userId = ' asasas';

  function greeting(myText: string | number) {
    // para que la funcion actue de acuerdo al tipado del argument
    if(typeof myText === 'string'){
      console.log("ahora soy string con mis metodos", myText.toLocaleLowerCase())
    }else{
      console.log("ahora soy número",  myText.toFixed(1))
    }
  }

  greeting('sas')
  greeting(12.1234566)
  greeting({a: 3})
  greeting(['a'])

})()
