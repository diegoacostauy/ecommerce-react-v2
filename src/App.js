import React, {Component} from 'react';
import './App.css';
import Home from './pages/Home/Home.component';
import Shop from './pages/Shop/Shop.component'
import Header from './components/Header/Header.component';
import Register from './pages/Register/Register.component';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
      this.setState({
        currentUser: user
      });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <>
        <Header currentUser={currentUser} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </>
    );
  }
}

export default App;
