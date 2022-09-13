import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from 'gsap'

const MAXIMUN_COUNT = 10

export const CounterEffectRef = () => {

  const [counter, setCounter] = useState(5)

  const counterElement = useRef<HTMLHeadingElement>(null)
  
  const handleClick = () => {
    setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT)) // siempre va tomar el valor más pequeño
  }

  // useEffect(() => {
  useLayoutEffect(() => {
    if(counter < 10 ) return;
    console.log("%cSe llego al valor máximo!", "color: blue; background-color: black; ")

    // gsap.to(counterElement.current,{y:-10, duration: 0.2, ease: 'ease.out' }).then(()=>{
    //   gsap.to(counterElement.current,{y:0, duration: 1, ease: 'bounce.out' })
    // })
    // para evitar este encadenamiento de promesas mejor usamos un timeline

    const tl = gsap.timeline();  // controlador de tiempo de la animación
    tl.to(counterElement.current,{y:-10, duration: 0.2, ease: 'ease.out' })
      .to(counterElement.current,{y:0, duration: 1, ease: 'bounce.out' })


      
  }, [counter])

  return (
    <>
      <h1>counterEffect:</h1>
      <h2 ref={counterElement} >{counter}</h2>
      <button onClick={handleClick} >
        +1
      </button>
    </>
  )
}
