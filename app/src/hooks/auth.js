import React, 
{
  useCallback, 
  useState, 
  useContext, 
  createContext
} from 'react';

import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [data, setData] = useState(() => {
    const user = localStorage.getItem('@DASHBOARD:login');

    if(user){
      return { user: JSON.parse(user) }
    }

    return {}
  });

  const signIn = useCallback(async (email, senha) => {
    const response = await api.get('/usuario');
    const user = response.data.filter(data => {
      console.log("signIn  aqui , com filtro no email e senha", data.email, email);
      return (data.email === email && data.senha === senha);
    })

    console.log("user", user);

    if(user.length > 0){
      localStorage.setItem('@DASHBOARD:login', JSON.stringify(user[0]));
      setData({user: user[0]});
    }else{
      throw new Error('Usuário ou senha inválido');
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@DASHBOARD:login');
    setData({});
  }, []);

  return (
    <AuthContext.Provider 
      value={{user:data.user, signIn, signOut}}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  if(!context){
    throw new Error('useAuth pracisa ser utilizado AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };