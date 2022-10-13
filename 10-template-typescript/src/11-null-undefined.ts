(() => {
  let myNumber: number = undefined;
  let myString: string = null;

  // aqui las variables son de tipo any:
  let myNull = null;
  let myUndefined = undefined;

  //forzar a null:
  let myNull1: null = null;
  let myUndefined1: undefined = undefined;

  let myNumber1: number | null = null; //usado en frameworks como React
  myNumber1  = 123;

  let myString1: string | undefined = undefined;
  myString1 = 'hola'

  function hi(name: string | null) {
    let hello = 'HOla ';
    if(name){
      hello += name;
    }else{
      hello += 'nobody';
    }
    console.log(hello)
  }

  hi('Olme')
  hi(null)

  //ahora con menos código

  function hiVersion2(name: string | null) {
    let hello = 'HOla ';
    hello += name?.toLocaleLowerCase() || 'nobody'; //si name no existe devuelve null
    console.log(hello)
  }

  hiVersion2('Sara')
  hiVersion2(null)

})()
