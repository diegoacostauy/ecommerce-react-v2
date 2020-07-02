import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage.component';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
