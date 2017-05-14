import React from 'react';
import { withProps } from 'recompose';
import IconButton from 'material-ui/IconButton';
import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit';

import history from '../../state/history';

type EditButtonPropsType = {
  onTouchTap: Function,
};

const enhance = withProps(() => ({
  onTouchTap: () => history.push('/profile/edit'),
}));

const EditButton = ({ onTouchTap }: EditButtonPropsType) => (
  <IconButton onTouchTap={onTouchTap}>
    <ModeEditIcon />
  </IconButton>
);

export default enhance(EditButton);
