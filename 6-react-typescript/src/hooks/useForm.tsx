import { ChangeEvent, useState } from "react";

// export function useForm<T>(initState:T) {  // tipo generico T
// export const useForm = (initState: any) => { // normal con any
export const useForm = <T extends Object>(initState:T) => { // como infiero tipo con arrow function: tengo que extends el tipo T de object
  const [formulario, setFormulario] = useState(initState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => { // porque lo dispara el evento
    const { name, value } = target

    setFormulario({
      ...formulario,
      [name]: value
    })
  };


  return {
    formulario,
    handleChange,
    ...formulario
  }
}