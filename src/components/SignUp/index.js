import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import TextField from 'redux-form-material-ui/lib/TextField';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import css from 'css-template';

import VietnamIcon from './vni-flag.gif';
import TopNavigation from '../Layout/TopNavigation';
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

const connectToRedux = connect(
  null,
  {
    onSubmit: signUpNewUser,
  }
);

type SignUpPropsType = {
  handleSubmit: Function,
};

const continueButtonStyles = css`
  text-align: center;
  background: none;
  box-shadow: none;
`;

const buttonWrapperStyles = css`
  position: fixed;
  bottom: 36px;
  left: 0;
  right: 0;
  text-align: center;
`;

const termStyles = css`
  color: #898989;
  font-size: 12px;
  padding: 12px 36px;
  display: inline-block;
  text-align: center;
`;

const fieldStyles = css`
  margin: 0 0 0 48px;
  width: calc(100% - 48px);
`;

const formWrapperStyles = css`
  padding: 12px 24px;
  position: relative;
`;

const flagStyles = css`
  width: 36px;
  position: absolute;
  top: 48px;
`;

const SignUp = ({ handleSubmit }: SignUpPropsType) => (
  <div>
    <TopNavigation headerText="Sign up" />

    <div style={formWrapperStyles}>
      <img src={VietnamIcon} alt="Vietnam" style={flagStyles} />
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

    <div style={buttonWrapperStyles}>
      <Link to="/terms" style={termStyles}>
        By pressing continue, you are agreeing to be bound by AirLala&quot;s
        &nbsp;Terms of Use & Privacy Policy
      </Link>
      <RaisedButton
        primary
        label="Continue"
        onTouchTap={handleSubmit}
        style={continueButtonStyles}
        buttonStyle={{ width: 'auto' }}
      />
    </div>
  </div>
);

const enhance = compose(
  connectToRedux,
  reduxForm({ form: 'Signup' }),
);

export default enhance(SignUp);
