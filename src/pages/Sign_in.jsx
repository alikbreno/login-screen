import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sign_in = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [onfocusEmail, setOnfocusEmail] = useState(false)
    const [onfocusSenha, setOnfocusSenha] = useState(false)

    const handleSubimit = (event) =>{
        event.preventDefault()
        alert("Login realizado com sucesso")
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
    const emailValid = emailRegex.test(email)
    const senhaValid = senha.length >= 6
    const emailErro = "Email inválido. Digite um email válido."
    const senhaErro = "Senha inválida. Mínimo de 6 caracteres"
    
    const validar = () => {
        const isValid = senhaValid && emailValid

        return isValid
    }

  return (
    <form onSubmit={handleSubimit} className='box-form'> 
        <h1>Faça login</h1>
        <div className='form'>
            <label htmlFor="email">Nome de usuário (e-mail)</label>
            <input 
                type="email"
                name="email" 
                id="email" 
                onChange={e => setEmail(e.target.value)} 
                value={email}
                onFocus={() => setOnfocusEmail(true)}
            />
            {!emailValid && onfocusEmail && (<p className='errorMessage'>{emailErro}</p>)}
        </div>
        <div className='form'>
            <label htmlFor="senha">Senha</label>
            <input 
                type="password" 
                name="senha" 
                id="senha" 
                minLength={6}
                onChange={e => setSenha(e.target.value)} 
                value={senha}
                onFocus={() => setOnfocusSenha(true)}
            />
            <div className='forgot'>
                {!senhaValid && onfocusSenha && (<p className='errorMessage'>{senhaErro}</p>)}
                <Link>Esqueceu sua senha?</Link>
            </div>
        </div>
        <button type='submit' className='button' disabled={!validar()}>Entrar</button>
        <div className='sign_up'>
            Ainda não tem uma conta? <Link to='/sign_up'>Registre-se agora</Link>
        </div>
    </form>
  )
}

export default Sign_in