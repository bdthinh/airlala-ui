import React from 'react';
import { withProps } from 'recompose';
import IconButton from 'material-ui/IconButton';
import ChatIcon from 'material-ui/svg-icons/communication/chat';

import history from '../../state/history';

type ChatButtonPropsType = {
  onTouchTap: Function,
};

const enhance = withProps(() => ({
  onTouchTap: () => history.push('/chat'),
}));

const ChatButton = ({ onTouchTap }: ChatButtonPropsType) => (
  <IconButton onTouchTap={onTouchTap}>
    <ChatIcon />
  </IconButton>
);

export default enhance(ChatButton);
