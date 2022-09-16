import { useState } from "react"

interface Props {
  initialValue?: number
}

// export const Counter = ({initialValue: nombre = 0}) => { // aqui se desestructura la prop y se asigna un nuevo nombre a number, no es un tipado
export const Counter = ({initialValue= 0}: Props) => {

  const [counter, setCounter] = useState(initialValue)
  
  const handleClick = () => {
    setCounter(s => s + 1)
  }
  return (
    <>
      <h1>counter: {counter}</h1>
      <button onClick={handleClick} >+1</button>
    </>
  )
}
