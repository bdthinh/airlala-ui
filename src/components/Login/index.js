import React from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from 'redux-form-material-ui/lib/TextField';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';

import BackButton from '../Layout/BackButton';
import { signInCurrentUser } from './login.state';

const connectToRedux = connect(
  null,
  {
    onSubmit: signInCurrentUser,
  }
);

type LoginPropsType = {
  handleSubmit: Function,
}

const fieldStyles = {
  margin: '0 12px',
  flex: 1,
};

const requiredValidation = value => (value ? undefined : 'Required');

/**
Valid formats:
(123) 456-7890
123-456-7890
123.456.7890
1234567890
+31636363634
075-63546725
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

const Login = ({ handleSubmit }: LoginPropsType) => (
  <div>
    <div>
      <BackButton />
      Login
    </div>
    <div>
      <Field
        style={fieldStyles}
        fullWidth
        name="email"
        component={TextField}
        hintText="Your email address"
        floatingLabelText="EMAIL"
        validate={[requiredValidation, emailValidation]}
      />

      <Field
        style={fieldStyles}
        fullWidth
        name="password"
        component={TextField}
        hintText="At least 8 characters"
        floatingLabelText="PASSWORD"
        type="password"
        validate={[requiredValidation, passwordValidation]}
      />
    </div>
    <div>
      <RaisedButton primary label="Log In" onTouchTap={handleSubmit} />
    </div>
  </div>
);

const enhance = compose(
  connectToRedux,
  reduxForm({ form: 'Login' }),
);

export default enhance(Login);
