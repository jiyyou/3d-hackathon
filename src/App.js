import React from 'react';
import './partials/_common.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './pages/Main/Main';
import Inventory from './pages/Inventory/Inventory';

function App() {
  return (
  	<BrowserRouter>
  		<Switch>
  			<Route path="/3d-hackathon/" exact component={Main} />
  			<Route path="/3d-hackathon/inventory" exact component={Inventory} />
{/*  			<Route path='/upload' exact component={Upload} />
  			<Route path="/:id" exact component={Main} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
