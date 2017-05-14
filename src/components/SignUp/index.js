import React from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from 'redux-form-material-ui/lib/TextField';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import VietnamIcon from './vietnam_icon.png';

import { signUpNewUser } from './signUp.state';

const requiredValidation = value => (value ? undefined : 'Required');

/**
Valid formats:
(123) 456-7890 123-456-7890 123.456.7890 1234567890 +31636363634 075-63546725
*/
const phoneValidation = phoneNumber => (
  phoneNumber && !phoneNumber.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im) ?
  'Phone number should be real' :
  undefined
);

const fieldStyles = {
  margin: '0 12px',
  flex: 1,
};

const connectToRedux = connect(
  null,
  {
    onSubmit: signUpNewUser,
  }
);

type SignUpPropsType = {
  handleSubmit: Function,
};

const SignUp = ({ handleSubmit }: SignUpPropsType) => (
  <div>
    <div>Signup</div>
    <div>
      <img src={VietnamIcon} alt="Vietnam" />
      <TextField disabled defaultValue="+84" name="prefix" />
      <Field
        style={fieldStyles}
        fullWidth
        name="phone"
        component={TextField}
        hintText="123.456.7890"
        floatingLabelText="Phone number"
        validate={[requiredValidation, phoneValidation]}
      />
    </div>
    <div>
      By pressing continue, you are agreeing to be bound by AirLala&quot;s
      <a href="/terms" target="_blank" rel="noopener noreferrer">
        Terms of Use & Privacy Policy
      </a>
      <RaisedButton primary label="Continue" onTouchTap={handleSubmit} />
    </div>
  </div>
);
const enhance = compose(
  connectToRedux,
  reduxForm({ form: 'Signup' }),
);

export default enhance(SignUp);
