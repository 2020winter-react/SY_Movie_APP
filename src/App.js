import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={["/","/main"]} component={Home} exact={true} />
        <Route path="/detail/:mid" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
