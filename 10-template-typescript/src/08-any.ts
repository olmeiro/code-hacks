(() => {
  let myDynamicVar :any; //desactivamos el sistema de chequeo de tipos.
  myDynamicVar = 2
  myDynamicVar = 'hola'

  // se aconseja no usar any, sino para que tenemos tipos?
  // como ts es incremental podemos empezar con any pero luego debemos ir definiendo los tipos.


  // como hago el cast con any?
  myDynamicVar = 'hola mundo'
  const rta = (myDynamicVar as string).toLocaleLowerCase() //primer forma de hacer cast
  console.log(rta)

  myDynamicVar = 123;
  const rta2 = (<number>myDynamicVar).toFixed() // cast con génericos
  console.log(rta2)





})()
