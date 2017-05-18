import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import TextField from 'redux-form-material-ui/lib/TextField';
import { compose, withProps } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import css from 'css-template';
import { createSelector } from 'reselect';

import {
  updateCurrentUserProfile,
  currentUserEmailSelector,
  currentUserFirstNameSelector,
  currentUserLastNameSelector,
} from '../../state/firebase-auth';

import TopNavigation from '../Layout/TopNavigation';
import AvatarWithName from '../Layout/AvatarWithName';

import {
  currentUserPhoneSelector,
} from '../SignUp/currentUser.state';

const mapStateToProps = createSelector(
  currentUserEmailSelector,
  currentUserPhoneSelector,
  currentUserFirstNameSelector,
  currentUserLastNameSelector,
  (email, phone, firstName, lastName) => ({
    phone,
    name: firstName && lastName && `${firstName} ${lastName}`,
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
);


const enhance = compose(
  connectToRedux,
  withProps(() => ({
    onSubmit: data => updateCurrentUserProfile(data),
  })),
  reduxForm({ form: 'Profile' }),
);

const requiredValidation = value => (value ? undefined : 'Required');

const emailValidation = (email) => {
  // eslint-disable-next-line
  const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return email && !email.match(regex) ? 'Email should be valid' : undefined;
};

type EditFormPropsType = {
  phone: string,
  name: string,
  handleSubmit: Function,
};

const nameStyles = css`
  margin-top: 12px;
  font-size: 18px;
  font-weight: 500;
  color: #757575;
`;

const fieldWrapperStyles = css`
  font-size: 12px;
  font-weight: 400;
  margin-top: 18px;
`;

const buttonWrapperStyles = css`
  text-align: center;
`;

const formWrapperStyles = css`
  padding: 12px 24px;
  position: relative;
`;

const displayPhone = phone => phone.replace('84', '(+84)  ');

const EditForm = ({
  phone,
  name,
  handleSubmit,
}: EditFormPropsType) => (
  <div>
    <TopNavigation headerText="Account" />
    <div style={{ textAlign: 'center' }}>
      <div style={fieldWrapperStyles}>
        <AvatarWithName name={name} />
        <div style={nameStyles}>
          {name && ''}
        </div>
      </div>
    </div>

    <div style={formWrapperStyles}>
      <div style={{ display: 'flex' }}>
        <Field
          style={{ margin: '0 12px 0 0' }}
          name="firstName"
          component={TextField}
          floatingLabelText="First Name"
          validate={[requiredValidation]}
        />

        <Field
          style={{ margin: '0 0 0 12px' }}
          name="lastName"
          component={TextField}
          floatingLabelText="Last Name"
          validate={[requiredValidation]}
        />
      </div>

      <Field
        fullWidth
        name="email"
        inputStyle={{ textAlign: 'center' }}
        component={TextField}
        floatingLabelText="Email"
        validate={[requiredValidation, emailValidation]}
      />

      <TextField
        fullWidth
        floatingLabelText="Phone"
        value={displayPhone(phone)}
        disabled
      />
    </div>

    <div style={buttonWrapperStyles}>
      <RaisedButton
        primary
        label="Update"
        onTouchTap={handleSubmit}
      />
    </div>
  </div>
);

export default enhance(EditForm);
