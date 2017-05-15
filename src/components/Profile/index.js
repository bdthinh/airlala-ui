import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import css from 'css-template';
import { createStructuredSelector } from 'reselect';

import { signOut } from '../../state/firebase-auth';

import {
  currentUserEmailSelector,
  currentUserPhoneSelector,
  currentUserFirstNameSelector,
  currentUserLastNameSelector,
} from '../Login/login.state';

import BackButton from '../Layout/BackButton';
import EditButton from './EditButton';

const mapStateToProps = createStructuredSelector({
  email: currentUserEmailSelector,
  phone: currentUserPhoneSelector,
  firstName: currentUserFirstNameSelector,
  lastName: currentUserLastNameSelector,
});

const enhance = connect(
  mapStateToProps,
);

const headerStyles = css`
  color: #000;
`;

type ProfilePropsType = {
  email: string,
  phone: string,
  firstName: string,
  lastName: string,
  avatarUrl: string,
};

const Profile = ({
  email,
  phone,
  firstName,
  lastName,
  avatarUrl,
}: ProfilePropsType) => (
  <div>
    <div style={headerStyles}>
      <BackButton />
      Account
      <EditButton />
    </div>
    <Divider />
    <div>
      <div>
        <img src={avatarUrl} alt={firstName} />
        <span>{`${firstName} ${lastName}`}</span>
      </div>
      <div>
        EMAIL
        <span>{email}</span>
      </div>
      <div>
        PHONE
        <span>{phone}</span>
      </div>
    </div>
    <Divider />
    <div>
      <div><Link to="/payment">Payment</Link></div>
      <div><Link to="/addresses">My Addresses</Link></div>
      <div><Link to="/feedback">Give Feedback</Link></div>
      <div><Link to="/terms">Terms & Privacy</Link></div>
      <div><Link to="/faqs">FAQs</Link></div>
      <div>
        <FlatButton
          label="SIGN OUT"
          onTouchTap={signOut}
        />
      </div>
      <div>
        V 1.0.1
      </div>
    </div>
  </div>
);

export default enhance(Profile);
