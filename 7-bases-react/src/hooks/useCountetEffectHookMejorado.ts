import { gsap } from 'gsap'
import { useEffect, useLayoutEffect, useRef, useState } from "react"

// const MAXIMUN_COUNT = 10

// export const useCountetEffectHookMejorado = (arg1:number, arg2: boolean) => {
export const useCountetEffectHookMejorado = ({ maxCount = 10 }) => { // puedo recibir la prop por una interface para mejorar el codigo

  const [counter, setCounter] = useState(5)

  // const counterElement = useRef<HTMLHeadingElement>(null) // cambiamos el nombre
  const elementToAnimate = useRef<any>(null)  // any para que acepte cualquier elemento como botones etc
  const tl = useRef(gsap.timeline())
  
  const handleClick = () => {
    // setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT)) // siempre va tomar el valor más pequeño
    setCounter(prev => Math.min(prev + 1, maxCount)) // siempre va tomar el valor más pequeño
  }

  useLayoutEffect(() => {
    if(!elementToAnimate.current) return // en caso de no tener elemento al cargar la app
    tl.current.to(elementToAnimate.current,{y:-10, duration: 0.2, ease: 'ease.out' })
              .to(elementToAnimate.current,{y:0, duration: 1, ease: 'bounce.out' })
              .pause()
  }, [])

  useEffect(() => {
    // if(counter < 10 ) return;
    // console.log("%cSe llego al valor máximo!", "color: blue; background-color: black; ")

    // este tl se reinicializa cada vez que useEffect se dispara: lo vamos a manejar con un useRef en la linea 12 y useLayoutEffect linea 19
    // const tl = gsap.timeline();  // controlador de tiempo de la animación
    //actualizamos tl.current
    // tl.current.to(counterElement.current,{y:-10, duration: 0.2, ease: 'ease.out' })
    //           .to(counterElement.current,{y:0, duration: 1, ease: 'bounce.out' })
      //movemos 30-31 a useLayoutEffect para no disparar el efecto cada vez que counter cambia

      // cada vez que cambia el counter quiero que se dispare la animacion:
      // if (counter < maxCount) return // si qiuero que solo se dispare en maxcount
      tl.current.play(0)
  }, [counter])

  // cada useEffect debe tener una responsabilidad única

  return {
    counter,
    // counterElement: elementToAnimate,
    elementToAnimate,
    handleClick
  }
}
