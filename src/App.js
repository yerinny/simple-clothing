import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';


import HomePage from './pages/homepage/homepage.component';


//this is just creating temporary hats page
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    //switch gives us more control over the code what will render out
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
