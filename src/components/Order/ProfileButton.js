import React from 'react';
import { withProps } from 'recompose';
import IconButton from 'material-ui/IconButton';
import VerifiedUserIcon from 'material-ui/svg-icons/action/verified-user';

import history from '../../state/history';

const ProfileButtonPropsType = {
  onTouchTap: Function,
};

const enhance = withProps(() => ({
  onTouchTap: () => history.push('/profile'),
}));

const ProfileButton = ({ onTouchTap }: ProfileButtonPropsType) => (
  <IconButton>
    <VerifiedUserIcon onTouchTap={onTouchTap} />
  </IconButton>
);

export default enhance(ProfileButton);
