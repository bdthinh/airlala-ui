import React from 'react';
import { withProps } from 'recompose';
import IconButton from 'material-ui/IconButton';
import BackIcon from 'material-ui/svg-icons/hardware/keyboard-backspace';
import css from 'css-template';
import history from '../../state/history';

type BackButtonPropsType = {
  onTouchTap: Function,
};

const enhance = withProps(() => ({
  onTouchTap: () => history.goBack(),
}));

const iconStyles = css`
  border: 2px solid #000;
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;

const BackButton = ({ onTouchTap }: BackButtonPropsType) => (
  <IconButton onTouchTap={onTouchTap} iconStyle={iconStyles}>
    <BackIcon />
  </IconButton>
);

export default enhance(BackButton);
