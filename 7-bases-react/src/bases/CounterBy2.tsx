// * * optimizacion de CounterBy

import { useState } from "react"

// ? interface para Props del componente:
interface Props {
  initialValue?: number
}

// ? interface para useState
interface CounterState {
  counter: number,
  clicks: number
}

export const CounterBy2 = ({initialValue= 5}: Props) => {

  // const [counterState, setCounterState] = useState<CounterState>({ // ? hago desestructuracion de counterState
  const [{counter, clicks}, setCounterState] = useState<CounterState>({  // ? primero se resuelve el counter de esta linea que el de afuera , scope.
    counter: initialValue,
    clicks: 0
  })
  
  const handleClick = (value: number) => {
      setCounterState( ({counter,clicks}) => ({
        counter: counter + value,
        clicks: clicks + 1
      }))
  }
  return (
    <>
      <h1>counterBy: {counter}</h1>
      <h1>counterClicks: {clicks}</h1>

      <button onClick={() => handleClick(1)} >+1</button>
      <button onClick={() => handleClick(5)} >+5</button>
    </>
  )
}
