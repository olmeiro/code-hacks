import { useTodos } from '../hooks/useTodos';
import { TodoItem } from './TodoItem'

// import { useContext } from 'react'
// import { TodoContext } from '../context/TodoContext'

export const TodoList = () => {
  // const context = useContext(TodoContext)
  // const {todoState} = useContext(TodoContext)
  // const {todos} = todoState
  const { todos } = useTodos()
  console.log(todos);
  return (
    <ul>
     {
      todos.map( todo => <TodoItem key={todo.id} todo={todo} />)
     }
    </ul>
  )
}
