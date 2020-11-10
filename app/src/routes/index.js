import React from 'react';

import { Switch, Route } from 'react-router-dom';



import PaginaPrincipal from '../pages/PaginaPrincipal';
import Login from '../pages/login';

const Routes = () => (
    <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/paginaPrincipal" component={PaginaPrincipal} />
    </Switch>
)

export default Routes;