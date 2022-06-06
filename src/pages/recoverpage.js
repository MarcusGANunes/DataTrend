import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'

import '../styles/login.modules.css'

const RecoverPage = () => {

    const [email, setEmail] = useState('')

    let navigate = useNavigate()

    return (
        <div className="login">
            <div className="login-area">
                <span className="header">Recuperação de senha</span>
                <span className="subheader">Enviaremos um e-mail com instruções de recuperação</span>
                <form action="">
                    <input
                        type="username"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                </form>
                <NavLink
                    className="btn"
                    to="/login"
                    onClick={() => alert("E-mail enviado")}
                >
                    ENVIAR
                </NavLink>

            </div>
        </div>
    )
}

export default RecoverPage
