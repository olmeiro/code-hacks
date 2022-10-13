(() => {
  // de forma inferida:
  let productPrice = 100;
  productPrice = 120;
  console.log(productPrice)

  // de forma explicita
  let customerAge :number = 28;
  // customerAge = customerAge + '1' //output: 281
  customerAge = customerAge + 1 //output: 281

  let productInStock :number;
  console.log('productInStock', productInStock); //hay un error!

  if(productInStock > 10) {
    console.log("is greater")
  }

  //NaN es parte del conjunto numbers
  let discount = parseInt('asasas');
  console.log("discount", discount)

  if(discount<=200){
    console.log('apply')
  }else{
    console.log("no apply")
  }

  // mas tipos de números:
  let hex = 0xfff; //hexadecimal
  console.log("hex", hex)
  let bin = 0b1010; //binario
  console.log("bin", bin)

  const myNumber: Number = 10; // Number se refiere al objeto number se refiere al tipo, esto está mal hecho.

})()
