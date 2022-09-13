import React, { ChangeEvent, useState } from "react";

export const FormWithoutHook = () => {
  const [formulario, setFormulario] = useState({
    email: "",
    name: "",
  });

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => { // porque lo dispara el evento
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => { // porque lo dispara el evento
    const { name, value } = target
    // console.log({name, value})
    setFormulario({
      ...formulario,
      [name]: value
    })
  };

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          // onChange={(e) => handleChange(e)}
          onChange={handleChange}
          type="email"
          name="email"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          onChange={handleChange}
          type="name"
          name="name"
          className="form-control"
        />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
