import { useReducer } from "react"
import { TodoState } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"
import { todoReducer } from "./TodoReducer"

// ctrl + . sobre el error para completar
const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: '1',
      desc: 'Aprender TS',
      completed: false
    },
    {
      id: '2',
      desc: 'Aprender React Native',
      completed: false
    },
  ],
  completed: 0,
  pending: 2
}

// como lucen las props que recibe TodoProvider:
interface props {
  children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }:props) => {

  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

  return (
    <TodoContext.Provider value={{ todoState }}>
      { children }
    </TodoContext.Provider>
  )
}
