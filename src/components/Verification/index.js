import React from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from 'redux-form-material-ui/lib/TextField';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';

import { verifyOTP } from './verification.state';

type VerificationPropsType = {
  handleSubmit: Function,
};

const fieldStyles = {
  margin: '0 12px',
  flex: 1,
};

const connectToRedux = connect(
  null, { onSubmit: verifyOTP }
);

const Verification = ({ handleSubmit }: VerificationPropsType) => (
  <div>
    <div>Verification</div>
    <div>
      <Field
        style={fieldStyles}
        fullWidth
        name="code"
        component={TextField}
        hintText="1234"
        floatingLabelText="Verification Code"
      />
    </div>
    <div>
      <RaisedButton primary label="Continue" onTouchTap={handleSubmit} />
    </div>
  </div>
);

const enhance = compose(
  connectToRedux,
  reduxForm({ form: 'Verification' }),
);

export default enhance(Verification);
