import React, { useState } from 'react';
import './SignIn.styles.scss';
import {connect} from 'react-redux';
import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [ user, setUser ] = useState({ email: '', password: ''});
  const { email, password } = user;

  const handleSubmit = async ev => {
    ev.preventDefault();
    const { email, password } = user;
    emailSignInStart(email, password);
  };

  const handleChange = (ev) => {
    ev.preventDefault();
    const { name, value } = ev.target;
    setUser({...user, [name]: value });
  }

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form action="" onSubmit={handleSubmit}>
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
        <div className="btn-group">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={googleSignInStart} isGoogleSignIn={true}>Sign In With Google</Button>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);
