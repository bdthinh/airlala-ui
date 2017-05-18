import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DoneIcon from 'material-ui/svg-icons/action/done';
import css from 'css-template';

import history from '../../state/history';
import ConfirmedCard from './ConfirmedCard';

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

const Confirmed = () => (
  <div>
    <div style={cardAnnouncementStyles}>
      <ConfirmedCard />
    </div>

    <div style={buttonWrapperStyles}>
      <RaisedButton
        primary
        icon={<DoneIcon />}
        onTouchTap={() => history.push('/orders')}
      />
    </div>
  </div>
);

export default Confirmed;
