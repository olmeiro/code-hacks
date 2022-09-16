import { Counter } from "./bases/Counter"
import { CounterBy } from "./bases/CounterBy"
import { CounterBy2 } from "./bases/CounterBy2"
import { CounterEffect } from "./bases/CounterEffect"
import { CounterEffectRef } from "./bases/CounterEffectRef"
import { CounterEffectRefHook } from "./bases/CounterEffectRefHook"
function App() {

  return (
    <>
      {/* <Counter  initialValue={15}/> */}
      {/* <CounterBy  /> */}
      {/* <CounterBy2 /> */}
      {/* <CounterEffect /> */}
      {/* <CounterEffectRef /> */}
      <CounterEffectRefHook />

    </>
  )
}

export default App
