import React from 'react';
import './App.css';
import Home from './pages/home/Home.component';
import Shop from './pages/shop/Shop.component'
import Header from './components/Header/Header.component';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
