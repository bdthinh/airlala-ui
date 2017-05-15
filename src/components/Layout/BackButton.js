import React from 'react';
import { withProps } from 'recompose';
import IconButton from 'material-ui/IconButton';
import BackIcon from 'material-ui/svg-icons/hardware/keyboard-backspace';

import history from '../../state/history';

type BackButtonPropsType = {
  onTouchTap: Function,
};

const enhance = withProps(() => ({
  onTouchTap: () => history.goBack(),
}));

const BackButton = ({ onTouchTap }: BackButtonPropsType) => (
  <IconButton onTouchTap={onTouchTap}>
    <BackIcon />
  </IconButton>
);

export default enhance(BackButton);
