import { TodoList } from "./components/TodoList"
import { TodoProvider } from "./context/TodoProvider"



export const Todo = () => {
  return (
    <TodoProvider >
      <h1>Todo App</h1>
     <TodoList />
    </TodoProvider>
  )
}
