import React, { useState } from "react";
import { NavLink } from 'react-router-dom'

import '../styles/login.modules.css'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login">
            <div className="login-area">
                <span className="header">Crie sua conta</span>
                <form action="">
                    <input
                        type="username"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Confirme sua senha"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </form>
                <div
                    className="btn"
                >
                    CADASTRAR
                </div>
                <NavLink to='/login'>Já possuo cadastro</NavLink>

            </div>
        </div>
    )
}

export default SignUp
