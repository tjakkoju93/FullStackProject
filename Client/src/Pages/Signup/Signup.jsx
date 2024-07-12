import React, { useState } from 'react'
import './SignupStyles.scss'
import { UseSignup } from '../../Hooks/UseSignup'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signuphook, error } = UseSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signuphook(email, password);
    setEmail('')
    setPassword('')
  }

  return (
    <div className="mainform">

      <form onSubmit={handleSubmit}>
        <h1>SignUp</h1>
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
       {error && <p>{error}</p>  }
      </form>
    </div>
  )
}

export default Signup
