import { useState } from "react"

interface Props {
  initialValue?: number
}

export const CounterBy = ({initialValue= 5}: Props) => {

  // const [counter, setCounter] = useState({
  const [counterState, setCounterState] = useState({
    counter: initialValue,
    clicks: 0
  })
  
  const handleClick = (value: number) => {
      // mejor que lo de abajo:
      setCounterState( prev => ({
        counter: prev.counter + value,
        clicks: prev.clicks + 1
      }))

    // setCounter(prev => {
    //   return {
    //     counter: 1,
    //    clicks: 1
    //   }
    // })
  }
  return (
    <>
      <h1>counterBy: {counterState.counter}</h1>
      <h1>counterClicks: {counterState.clicks}</h1>

      <button onClick={() => handleClick(1)} >+1</button>
      <button onClick={() => handleClick(5)} >+5</button>
    </>
  )
}
