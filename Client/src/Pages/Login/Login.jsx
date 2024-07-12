import React, { useState } from 'react'
import './Loginstyles.scss'
import { UseLoginHook } from '../../Hooks/UseLoginHook'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {loginHook,error} = UseLoginHook();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginHook (email,password);
    setEmail('')
    setPassword('')

  }

  return (
    <div className="mainform">

      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="field">
          <label htmlFor="">Email : </label>
          <input type="email" onChange={(e) => { setEmail(e.target.value) }}
            value={email} />
        </div>

        <div className="field">
          <label htmlFor="">Password : </label>
          <input type="password" onChange={(e) => { setPassword(e.target.value) }}
            value={password} />
        </div>
        <button>Submit</button>
        {error && <p>{error}</p> }
      </form>
    </div>
  )
}

export default Login
