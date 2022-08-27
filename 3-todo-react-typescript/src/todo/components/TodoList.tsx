import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  // const context = useContext(TodoContext)
  const {todoState} = useContext(TodoContext)
  const {todos} = todoState
  console.log(todos);
  return (
    <ul>
     {
      todos.map( todo => <TodoItem key={todo.id} todo={todo} />)
     }
    </ul>
  )
}
