import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import css from 'css-template';
import { createSelector } from 'reselect';

import { signOut } from '../../state/firebase-auth';

import {
  currentUserEmailSelector,
  currentUserPhoneSelector,
  currentUserFirstNameSelector,
  currentUserLastNameSelector,
} from '../Login/login.state';

import TopNavigation from '../Layout/TopNavigation';
import AvatarWithName from '../Layout/AvatarWithName';
import EditButton from './EditButton';

const mapStateToProps = createSelector(
  currentUserEmailSelector,
  currentUserPhoneSelector,
  currentUserFirstNameSelector,
  currentUserLastNameSelector,
  (email, phone, firstName, lastName) => ({
    email,
    phone,
    name: firstName && lastName && `${firstName} ${lastName}`,
  })
);

const enhance = connect(
  mapStateToProps,
);

type ProfilePropsType = {
  email: string,
  phone: string,
  name: string,
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

const fieldStyles = css`
  font-size: 16px;
  font-weight: 500;
  color: #757575;
`;

const signOutStyles = css`
  position: fixed;
  left: 0;
  right: 0;
  bottom:  18px;
`;

const Profile = ({
  email,
  phone,
  name,
}: ProfilePropsType) => (
  <div>
    <TopNavigation
      headerText="Account"
      rightElement={EditButton}
    />

    <div style={{ textAlign: 'center' }}>
      <div style={fieldWrapperStyles}>
        <AvatarWithName name={name} />
        <div style={nameStyles}>
          {name || 'Thinh Bui'}
        </div>
      </div>

      <div style={fieldWrapperStyles}>
        EMAIL
        <div style={fieldStyles}>
          {email || 'jinsherlock@gmail.com'}
        </div>
      </div>

      <div style={fieldWrapperStyles}>
        PHONE
        <div style={fieldStyles}>
          {phone || '+84936672990'}
        </div>
      </div>
    </div>

    <Divider style={{ marginTop: '32px', marginBottom: '32px' }} />

    <div style={{ textAlign: 'center', paddingBottom: '60px' }}>
      <div style={fieldWrapperStyles}>
        <a href="mailto:support@airlala.com?Subject=I%20would%20like%20to%20ask">
          Give Feedback
        </a>
      </div>
      <div style={fieldWrapperStyles}><Link to="/terms">Terms & Privacy</Link></div>
      <div style={fieldWrapperStyles}><Link to="/faqs">FAQs</Link></div>

      <div style={signOutStyles}>
        {null && <FlatButton
          label="LOGOUT"
          onTouchTap={signOut}
        />}
        <div style={fieldStyles}>v 0.0.7</div>
      </div>

    </div>
  </div>
);

export default enhance(Profile);
