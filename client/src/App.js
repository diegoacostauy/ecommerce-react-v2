import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header/Header.component';
import Spinner from './components/Spinner/Spinner.component';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.component';
import { Switch, Route, Redirect } from 'react-router-dom';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';

import { GlobalStyle } from './global.styles';

const Home = lazy(() => import('./pages/Home/Home.component'));
const Shop = lazy(() => import('./pages/Shop/Shop.component'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout.component'));
const Register = lazy(() => import('./pages/Register/Register.component'));

const App = ({ currentUser, checkUserSession }) => {

  useEffect(() => {
    checkUserSession();
  },[checkUserSession])


  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path="/" exact component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/register" exact render={() => currentUser ?
              (<Redirect to="/" />) :
              (<Register />)
            } />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
