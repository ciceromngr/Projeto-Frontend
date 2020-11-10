import React from  'react';
import { Container } from './style';
import { useHistory } from 'react-router-dom'
const PaginaPrincipal = () => {
    const history = useHistory();

    const ProximaPagina = (e) => {
        e.preventDefault();
        
        try {
            history.push('/paginaDivEstilizada')
            console.log('Sucesso .... indo para outra pagina')
        } catch (error) {
            console.log("Erro ao tentar entrar em outra pagina", error);
        }
    }
return (
    <Container>
        
        <div className="form">                  
                <div className="input">
                    <div className="inputBox">
                        <form onSubmit={ProximaPagina}>
                        <input 
                            type="submit" 
                            name="" 
                            value="Start" 
                           />
                        </form>
                    </div>
                </div>
            </div>

    </Container>
)
}

export default PaginaPrincipal;