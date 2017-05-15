import React from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from 'redux-form-material-ui/lib/TextField';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import css from 'css-template';

import TopNavigation from '../Layout/TopNavigation';
import { signInCurrentUser } from './login.state';

const connectToRedux = connect(
  null,
  { onSubmit: signInCurrentUser }
);

type LoginPropsType = {
  handleSubmit: Function,
}

const requiredValidation = value => (value ? undefined : 'Required');

/**
Valid formats:
(123) 456-7890 123-456-7890 123.456.7890 1234567890 +31636363634 075-63546725
*/
const passwordValidation = password => (
  password && password.length < 8 ?
  'Password is at least 8 characters' :
  undefined
);

const emailValidation = (email) => {
  // eslint-disable-next-line
  const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return email && !email.match(regex) ? 'Email should be valid' : undefined;
};

const formWrapperStyles = css`
  padding: 12px 24px;
  position: relative;
`;

const buttonWrapperStyles = css`
  position: fixed;
  bottom: 36px;
  left: 0;
  right: 0;
  text-align: center;
`;

const Login = ({ handleSubmit }: LoginPropsType) => (
  <div>
    <TopNavigation headerText="Login" />

    <div style={formWrapperStyles}>
      <Field
        fullWidth
        name="email"
        component={TextField}
        hintText="Your email address"
        floatingLabelText="EMAIL"
        validate={[requiredValidation, emailValidation]}
      />

      <Field
        fullWidth
        name="password"
        component={TextField}
        hintText="At least 8 characters"
        floatingLabelText="PASSWORD"
        type="password"
        validate={[requiredValidation, passwordValidation]}
      />
    </div>

    <div style={buttonWrapperStyles}>
      <RaisedButton
        primary
        label="Login"
        onTouchTap={handleSubmit}
      />
    </div>
  </div>
);

const enhance = compose(
  connectToRedux,
  reduxForm({ form: 'Login' }),
);

export default enhance(Login);
