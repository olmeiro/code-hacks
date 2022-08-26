import { TodoProvider } from "./context/TodoProvider"



export const Todo = () => {
  return (
    <TodoProvider >
      <h1>Todo App</h1>
      <ul>
        <li>Todo 1</li>
        <li>Todo 2</li>
        <li>Todo 3</li>
        <li>Todo 4</li>
      </ul>
    </TodoProvider>
  )
}
