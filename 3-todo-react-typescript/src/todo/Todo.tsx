import { Title } from "./components/Title";
import { TodoList } from "./components/TodoList"
import { TodoProvider } from "./context/TodoProvider"
import { useTodos } from './hooks/useTodos';



export const Todo = () => {
  // const { pendingTodos} = useTodos() //aca no hay contexto aún, se crea con el TodoProvider
  return (
    <TodoProvider >
      <Title />
     <TodoList />
    </TodoProvider>
  )
}
