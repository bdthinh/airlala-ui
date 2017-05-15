import React from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from 'redux-form-material-ui/lib/TextField';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import css from 'css-template';

import { verifyOTP } from './verification.state';
import TopNavigation from '../Layout/TopNavigation';

type VerificationPropsType = {
  handleSubmit: Function,
};

const fieldStyles = css`
  margin: 0 0 0 24px;
  width: calc(100% - 24px);
`;

const formWrapperStyles = css`
  padding: 12px 24px;
  position: relative;
`;

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

const connectToRedux = connect(
  null, { onSubmit: verifyOTP }
);

const Verification = ({ handleSubmit }: VerificationPropsType) => (
  <div>
    <TopNavigation headerText="Verification" />
    <div style={formWrapperStyles}>
      <Field
        style={fieldStyles}
        fullWidth
        name="code"
        component={TextField}
        hintText="1234"
        floatingLabelText="Verification Code"
      />
    </div>

    <div style={buttonWrapperStyles}>
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
  reduxForm({ form: 'Verification' }),
);

export default enhance(Verification);
