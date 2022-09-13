import { Timer } from './Timer'
import { useState } from 'react';

export const TimeFather = () => {
  const [milisegundos, setMilisegundos] = useState(1000)
  return (
    <>
      <div>Milisegundos: { 1000 }</div>
      
      <br/>
      <button 
        onClick= {() => setMilisegundos(1000)}
        className='btn btn-outline-success'
      >
        1000
      </button>
      <button 
        onClick= {() => setMilisegundos(2000)}
        className='btn btn-outline-success'>
        2000
      </button>
      
      <Timer milisegundos={milisegundos} />
    </>
  )
}


