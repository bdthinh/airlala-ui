import React from 'react';
import { withProps } from 'recompose';
import IconButton from 'material-ui/IconButton';
import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit';
import css from 'css-template';

import history from '../../state/history';

type EditButtonPropsType = {
  onTouchTap: Function,
};

const enhance = withProps(() => ({
  onTouchTap: () => history.push('/profile/edit'),
}));

const buttonStyles = css`
  min-width: 48px;
`;

const EditButton = ({ onTouchTap }: EditButtonPropsType) => (
  <IconButton onTouchTap={onTouchTap} style={buttonStyles}>
    <ModeEditIcon />
  </IconButton>
);

export default enhance(EditButton);
