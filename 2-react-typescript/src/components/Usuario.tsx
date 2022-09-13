import React from 'react'
import { useState } from 'react';

// interface: reglas para los objetos:
interface User  {
  uid: string,
  name: string
}

const tempUser = {
  uid: 'XYZ123',
  name: 'asd'
}


export const Usuario = () => {
  const [user, setUser] = useState<User>(tempUser)

  const login = () => {
    setUser({
      uid: 'john doe',
      name: 'john'
    })
  }

  return (
    <div className='mt-5'>
      <h3>Usuario: useState</h3>

      <button 
        onClick={login}
        className='btn btn-outline-primary'>
        Login
      </button>
      {
        (!user)
        ? <pre>NO HAY USUARIO</pre>
        : <pre>{JSON.stringify(user)}</pre>
      }

    </div>
  )
}
