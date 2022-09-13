import { useEffect, useLayoutEffect, useRef, useState } from "react"
// import { gsap } from 'gsap'
import { useCountetEffectHook } from '../hooks/useCountetEffectHook';
import { useCountetEffectHookMejorado } from "../hooks/useCountetEffectHookMejorado";

// const MAXIMUN_COUNT = 10

export const CounterEffectRefHook = () => {

  // const [counter, setCounter] = useState(5)

  // const counterElement = useRef<HTMLHeadingElement>(null)
  
  // const handleClick = () => {
  //   setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT)) // siempre va tomar el valor más pequeño
  // }

  // useEffect(() => {
  //   if(counter < 10 ) return;
  //   console.log("%cSe llego al valor máximo!", "color: blue; background-color: black; ")

  //   const tl = gsap.timeline();  // controlador de tiempo de la animación
  //   tl.to(counterElement.current,{y:-10, duration: 0.2, ease: 'ease.out' })
  //     .to(counterElement.current,{y:0, duration: 1, ease: 'bounce.out' })
      
  // }, [counter]) //todo esto se va para el hook

  //usamos el hook:
  // const {counter, counterElement, handleClick} = useCountetEffectHook()
  const {counter, elementToAnimate, handleClick} = useCountetEffectHookMejorado({
    maxCount: 13
  })

  return (
    <>
      <h1>counterEffect:</h1>
      {/* <h2 ref={counterElement} >{counter}</h2> */}
      <h2 ref={elementToAnimate} >{counter}</h2>
      <button onClick={handleClick} >
        +1
      </button>
    </>
  )
}
