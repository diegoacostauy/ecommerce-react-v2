import React, { Component } from 'react';
import './SignIn.styles.scss';
import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = async ev => {
    ev.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (ev) => {
    ev.preventDefault();
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            required
            label="Email"
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            required
            label="Password"
            onChange={this.handleChange}
          />
          <div className="btn-group">
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn={true}>Sign In With Google</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;