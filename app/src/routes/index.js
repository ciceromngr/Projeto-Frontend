import React from 'react';

import { Switch, Route } from 'react-router-dom';


import paginaDivEstilizada from '../pages/paginaComDivEstilizada';
import PaginaPrincipal from '../pages/PaginaPrincipal';
import ScrollLAteral from '../pages/ScrollLeft';
import efeitoDiv from '../pages/estiloBotaoPersonalizado';
import Login from '../pages/login';

const Routes = () => (
    <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/paginaPrincipal" component={PaginaPrincipal} />
        <Route path="/paginaDivEstilizada" component={paginaDivEstilizada}/>
        <Route path="/scrollLAteral" component={ScrollLAteral}/>
        <Route path="/efeitoDiv" component={efeitoDiv}/>
    </Switch>
)

export default Routes;