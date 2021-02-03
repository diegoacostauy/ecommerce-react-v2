import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';
import './SignUp.styles.scss';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
  const [user, setUser] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = user;

  const handleChange = (ev) => {
    ev.preventDefault();
    const { name, value } = ev.target;
    setUser({ ...user, [name]: value})
  }

  const handleSubmit = async ev => {
    ev.preventDefault();
    const { displayName, email, password, confirmPassword } = user;

    if (password !== confirmPassword) {
      alert('passwords don\'t match');
      return;
    }

    signUpStart({ displayName, email, password });
  }

  return (
    <div className="sign-up">
      <h2 className="title">
        I do not have an account
      </h2>
      <p>
        Sign up with your email and password
      </p>
      <form className="sign-up-form" action="" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          required
          label="Name"
          onChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          required
          label="Email"
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          required
          label="Password"
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          label="Confirm Password"
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userData => dispatch(signUpStart(userData))
})

export default connect(null, mapDispatchToProps)(SignUp);