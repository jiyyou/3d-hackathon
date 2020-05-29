import React from 'react';
import './partials/_common.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './pages/Main/Main';

function App() {
  return (
  	<BrowserRouter>
  		<Switch>
  			<Route path="/" exact component={Main} />
{/*  			<Route path='/upload' exact component={Upload} />
  			<Route path="/:id" exact component={Main} /> */}
      </Switch>
    </BrowserRouter>

    <div className="App">
      <h1>Testing</h1>
      <h2>Testing2</h2>
    </div>
  );
}

export default App;
