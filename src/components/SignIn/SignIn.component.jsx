import React, { Component } from 'react';
import './SignIn.styles.scss';
import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev.target);
    this.setState({

    })
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
          <Button type="submit">Sign In</Button>
        </form>
      </div>
    )
  }
}

export default SignIn;