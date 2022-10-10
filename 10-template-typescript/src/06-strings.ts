(() => {
  let productTitle = 'My amazing product';
  productTitle = null;
  productTitle = () => {}
  productTitle = 123;

  productTitle = 'My amazing product changed';
  console.log("productTitle", productTitle)

  const productDescription = 'bla bla bla bla'; // es preferible
  console.log("productDescription", productDescription)

  const own = "I'm olmeiro" // para el apostrofe
  console.log("own", own)

  const summary = `hola
    esta es una nueva linea
    además uso variables: ${own}
  `;

  console.log("summary", summary);

  const myString: String; // mala prácticas
  const myString: string; // buena prácticas


})()
