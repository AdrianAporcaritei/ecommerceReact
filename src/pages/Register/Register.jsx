import React from 'react'
import "./Register.scss"

const Register = () => {
  return (
    <div className='container'>
    <div className='wrapper'>
        <h2>CREATE AN ACCOUNT</h2>
        <form>
            <input placeholder="name"/>
            <input placeholder="last name"/>
            <input placeholder="username"/>
            <input placeholder="email"/>
            <input placeholder="password"/>
            <input placeholder="confirm password"/>
            <p>By creating an account, I consent to the processing of my personal data
                 in accirdance with the <b>PRIVACY POLICY</b></p>
            <button>CREATE</button>
        </form>
    </div>
</div>
  )
}

export default Register