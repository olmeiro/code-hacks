import { gsap } from 'gsap'
import { useEffect, useRef, useState } from "react"

const MAXIMUN_COUNT = 10

export const useCountetEffectHook = () => {

  const [counter, setCounter] = useState(5)

  const counterElement = useRef<HTMLHeadingElement>(null)
  
  const handleClick = () => {
    setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT)) // siempre va tomar el valor más pequeño
  }

  useEffect(() => {
    if(counter < 10 ) return;
    console.log("%cSe llego al valor máximo!", "color: blue; background-color: black; ")

    const tl = gsap.timeline();  // controlador de tiempo de la animación
    tl.to(counterElement.current,{y:-10, duration: 0.2, ease: 'ease.out' })
      .to(counterElement.current,{y:0, duration: 1, ease: 'bounce.out' })
      
  }, [counter])


  return {
    counter,
    counterElement,
    handleClick
  }
}
