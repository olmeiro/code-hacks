(() => {
  let isEnable = true;
  isEnable = 'as'
  isEnable = 123;
  isEnable = false

  let isNew :boolean = false;
  console.log("isNew", isNew)
  isNew = true;
  console.log("isNew", isNew)

  const random = Math.random();
  console.log("random", random);

  isNew = random >= 0.5 ? 'as' : 'as'
  isNew = random >= 0.5 ? true : false
  console.log("random at end:", random);

  const myBoolean: boolean = true;

  // en js un variable puede inicializarce con null o undefined, si es booleana
  // en ts esto no lo podemos hacer, sólo recibe true o false.
})()
