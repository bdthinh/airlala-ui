import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DoneIcon from 'material-ui/svg-icons/action/done';
import css from 'css-template';
import { connect } from 'react-redux';

import history from '../../state/history';
import ConfirmedCard from './ConfirmedCard';
import { clearCart } from '../Cart/cart.state';

const cardAnnouncementStyles = css`
  margin: 0 6px;
  padding: 192px 0;
`;

const buttonWrapperStyles = css`
  position: fixed;
  bottom: 36px;
  left: 0;
  right: 0;
  text-align: center;
`;

type ConfirmedPropsType = {
  onDoneTouchTap: Function,
};

const enhance = connect(
  null,
  dispatch => ({
    onDoneTouchTap: () => {
      dispatch(clearCart());
      history.push('/orders');
    },
  })
);

const Confirmed = ({ onDoneTouchTap }: ConfirmedPropsType) => (
  <div>
    <div style={cardAnnouncementStyles}>
      <ConfirmedCard />
    </div>

    <div style={buttonWrapperStyles}>
      <RaisedButton
        primary
        icon={<DoneIcon />}
        onTouchTap={onDoneTouchTap}
      />
    </div>
  </div>
);

export default enhance(Confirmed);
