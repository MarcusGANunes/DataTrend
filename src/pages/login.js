import React, { useState } from "react";
import { NavLink } from 'react-router-dom'

import '../styles/login.modules.css'

const LoginArea = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login">
            <div className="login-area">
                <span className="header">Área de login</span>
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
                </form>
                <div
                    className="btn"
                >
                    ENTRAR
                </div>
                <NavLink to='/signup'>Criar uma conta</NavLink>
                <NavLink to='/recover'>Esqueci minha senha</NavLink>

            </div>
        </div>
    )
}

export default LoginArea