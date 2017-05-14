import React from 'react';
import { withProps } from 'recompose';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui/svg-icons/content/clear';

import history from '../../state/history';

type CancelButtonPropsType = {
  onTouchTap: Function,
};

const enhance = withProps(() => ({
  onTouchTap: () => history.goBack(),
}));

const CancelButton = ({ onTouchTap }: CancelButtonPropsType) => (
  <IconButton onTouchTap={onTouchTap}>
    <ClearIcon />
  </IconButton>
);

export default enhance(CancelButton);
