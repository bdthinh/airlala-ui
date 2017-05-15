import React from 'react';
import { withProps } from 'recompose';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import css from 'css-template';
import history from '../../state/history';

type CancelButtonPropsType = {
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

const buttonStyles = css`
  min-width: 48px;
`;

const CancelButton = ({ onTouchTap }: CancelButtonPropsType) => (
  <IconButton onTouchTap={onTouchTap} style={buttonStyles} iconStyle={iconStyles}>
    <ClearIcon />
  </IconButton>
);

export default enhance(CancelButton);
