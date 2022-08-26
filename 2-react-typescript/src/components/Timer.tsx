// npm install --save @types/node
// https://blog.ag-grid.com/avoiding-react-18-double-mount/ (para el setInterval que avanza de dos en dos)
// https://github.com/facebook/react/issues/24383

// Revisa la version que tienes de react, lo mas seguro es porque usaste la version 18 que tiene un braking change en cuanto a lo del montando/desmontado de los componentes, para solucionarlo solo desactiva el Strict.Mode, y ya tu contador empezara de 1 en 1.

import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
  milisegundos: number,
  segundos?: number  // optional
}

export const Timer = ( {milisegundos}: TimerArgs) => {
  const [segundos, setSegundos] = useState(0)
  // console.log(milisegundos);
  const ref = useRef<NodeJS.Timer>();

  useEffect(() => {
    ref.current && clearInterval(ref.current)
    ref.current = setInterval(() => 
      // console.log('Count Value inside setInterval: ', segundos)
      {console.log("useEffect");
      setSegundos( s => s + 1)}
    , milisegundos)
    
  }, [milisegundos])

  return (
    <>
      <h4>Timer: <small>{segundos}</small></h4>
    </>
  )
}
