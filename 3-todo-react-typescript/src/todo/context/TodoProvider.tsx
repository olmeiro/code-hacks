import { TodoContext } from "./TodoContext"

// como lucen las props que recibe TodoProvider:
interface props {
  children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }:props) => {
  return (
    <TodoContext.Provider value={{}}>
      { children }
    </TodoContext.Provider>
  )
}
