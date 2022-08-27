import { createContext } from "react";
import { TodoState } from '../interfaces/interfaces';

// las interfaces heredan, extienden etc
// los type NO
export type TodoContextProps = {
  todoState: TodoState,
  toggleTodo: (id: string) => void
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps) // debemos engañar a typescritp con el as




