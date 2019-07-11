import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './Menu'
import Usuarios from './usuarios/Index';
import Tareas from './Tareas/Index';
import Publications from './Publications/Index';

const App = () => {
  return (
    <React.Fragment>
       <BrowserRouter>
         <Menu />
          <Switch>
            <Route exact path={'/'} component={Usuarios}/>
            <Route exact path={'/tareas'} component={Tareas}/>
            <Route exact path={'/publications/:key'} component={Publications}/>
          </Switch>
      </BrowserRouter>
    </React.Fragment>
    
  )
}

export default App
