import React, { useState } from 'react';
import { Body } from './styles';

import { useAuth } from '../../hooks/auth';
import { useHistory } from 'react-router-dom';
const Login = () => {
    const history = useHistory();
    const { signIn } = useAuth();
  
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault(); 
      console.log(senha, email)
      try {
          
        await signIn(email, senha);
        console.log("response ", email, senha);
        console.log("handleSubmit success");
  
        history.push('/paginaPrincipal');
      } catch (error) {
        console.log("handleSubmit error", error);
      } 
    };
  
    return (
    <Body>
        <div className="form">
            <h2>Login</h2>
            <div className="input">
                <form  onSubmit={handleSubmit}>
                <div className="inputBox">
                    <label>E-mail</label>
                    <input 
                        type="email" 
                        name="" 
                        placeholder="exemplo@exemplo"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
                <div className="inputBox">
                    <label>Senha</label>
                    <input 
                        type="password" 
                        name="" 
                        placeholder=".........."
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        />
                </div>
                <div className="inputBox">
                    <input 
                        type="submit" 
                        name="" 
                        value="Entrar"
                        
                        />
                </div>
                </form>
            </div>
            <p className="esquecido">Esqueceu a Senha ? <a href="#">Clique aqui</a></p>
            <p className="esquecido">Cadastrar ? <a href="#">Clique aqui</a></p>
        </div>
    </Body>
    )
}

export default Login;