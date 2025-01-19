import React from 'react'
import { Link } from 'react-router-dom'

const Sign_in = () => {
  return (
    <div className='box-form'> 
        <h1>Faça login</h1>
        <div className='form'>
            <label htmlFor="email">Nome de usuário ou e-mail</label>
            <input type="email" name="email" id="email" />
        </div>
        <div className='form'>
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senha" />
            <div className='forgot'>
                <Link>Esqueceu sua senha?</Link>
            </div>
        </div>
        <Link className='button'>Entrar</Link>
        <div className='sign_up'>
            Ainda não tem uma conta? <Link to='/sign_up'>Registre-se agora</Link>
        </div>
    </div>
  )
}

export default Sign_in