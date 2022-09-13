import React, { ChangeEvent, useState } from "react";
import { useForm } from "../hooks/useForm";

interface FormData {
  email: string,
  name: string, 
  edad: number
}

export const FormWitHook = () => {
  
  const { name, email, edad, handleChange } = useForm<FormData>({
    email: 'olme.orozco@gmail.com',
    name: 'olmeiro orozco',
    edad: 35
  })
  // const { formulario, handleChange } = useForm<FormData>({
  //   email: 'olme.orozco@gmail.com',
  //   name: 'olmeiro orozco',
  //   edad: 35
  // })

  // const { email, name, edad } = formulario  // aqui con ayuda de interface


  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          // onChange={(e) => handleChange(e)}
          onChange={handleChange}
          type="email"
          name="email"
          // value={formulario.email}
          value={email}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          // value={formulario.name}
          value={name}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">edad:</label>
        <input
          onChange={handleChange}
          type="number"
          name="edad"
          // value={formulario.edad}
          value={edad}
          className="form-control"
        />
      </div>
      {/* <pre>{JSON.stringify(formulario)}</pre> */}
      <pre>{JSON.stringify({email, name, edad})}</pre>
    </form>
  );
};
