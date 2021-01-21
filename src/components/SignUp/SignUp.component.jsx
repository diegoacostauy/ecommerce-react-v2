import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';
import './SignUp.styles.scss';
import { signUpStart } from '../../redux/user/user.actions';
class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleChange = (ev) => {
    ev.preventDefault();
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async ev => {
    ev.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('passwords don\'t match');
      return;
    }

    signUpStart({ displayName, email, password });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">
          I do not have an account
        </h2>
        <p>
          Sign up with your email and password
        </p>
        <form className="sign-up-form" action="" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            required
            label="Name"
            onChange={this.handleChange}
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            required
            label="Email"
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            required
            label="Password"
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
            label="Confirm Password"
            onChange={this.handleChange}
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userData => dispatch(signUpStart(userData))
})

export default connect(null, mapDispatchToProps)(SignUp);