import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import TextField from 'redux-form-material-ui/lib/TextField';
import { compose } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import css from 'css-template';
import { createSelector } from 'reselect';

import CancelButton from './CancelButton';
import {
  currentUserEmailSelector,
  currentUserPhoneSelector,
  currentUserFirstNameSelector,
  currentUserLastNameSelector,
} from '../Login/login.state';

import { updateCurrentUser } from './profile.state';

const headerStyles = css`
  color: #000;
`;

const mapStateToProps = createSelector(
  currentUserEmailSelector,
  currentUserPhoneSelector,
  currentUserFirstNameSelector,
  currentUserLastNameSelector,
  (email, phone, firstName, lastName) => ({
    phone,
    initialValues: {
      firstName,
      lastName,
      email,
      phone,
    },
  })
);

const connectToRedux = connect(
  mapStateToProps,
  {
    onSubmit: updateCurrentUser,
  },
);

const enhance = compose(
  connectToRedux,
  reduxForm({ form: 'Profile' }),
);

const fieldStyles = {
  margin: '0 12px',
  flex: 1,
};

const requiredValidation = value => (value ? undefined : 'Required');

const emailValidation = (email) => {
  // eslint-disable-next-line
  const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return email && !email.match(regex) ? 'Email should be valid' : undefined;
};

type EditFormPropsType = {
  phone: string,
  handleSubmit: Function,
};

const EditForm = ({
  phone,
  handleSubmit,
}: EditFormPropsType) => (
  <div>
    <div style={headerStyles}>
      <CancelButton />
      Account
    </div>
    <div>
      <Field
        style={fieldStyles}
        name="firstName"
        component={TextField}
        floatingLabelText="First Name"
        validate={[requiredValidation]}
      />

      <Field
        style={fieldStyles}
        name="lastName"
        component={TextField}
        floatingLabelText="Last Name"
        validate={[requiredValidation]}
      />

      <Field
        style={fieldStyles}
        fullWidth
        name="email"
        component={TextField}
        hintText="Your Email Address"
        floatingLabelText="Email"
        validate={[requiredValidation, emailValidation]}
      />

      <TextField
        style={fieldStyles}
        fullWidth
        hintText="123.456.7890"
        floatingLabelText="Phone"
        defaultValue={phone}
        disabled
      />
    </div>
    <div>
      <RaisedButton primary label="Update" onTouchTap={handleSubmit} />
    </div>
  </div>
);

export default enhance(EditForm);
