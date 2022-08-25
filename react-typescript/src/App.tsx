import { Counter } from "./components/Counter"
import { Usuario } from "./components/Usuario"
import { TimeFather } from './components/TimeFather'

function App() {

  return (
    <>
     <h1>React - Ts</h1>
     <hr/>

    <h2>useState</h2>
     <Counter />
     <Usuario />

     <h2>useEffect</h2>
     <hr/>

     <TimeFather />

    </>
  )
}

export default App
