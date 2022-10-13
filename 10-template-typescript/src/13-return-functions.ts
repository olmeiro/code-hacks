(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach(item => {
      total += item
    })
    return total.toString();
  }



  const rta = calcTotal([1,2,3])
  console.log(rta)

  // const rta1 = calcTotal('as')
  // console.log(rta1)

  //funciones sin retorno: normalmente llaman otras functions
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices)
    console.log(`El total es ${rta}`)
    // return rta // se supone que no retorna nada, no va el return
  }

  const rta2 = printTotal([1,3,3])
})()
