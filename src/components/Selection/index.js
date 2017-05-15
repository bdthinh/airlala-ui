import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { withProps } from 'recompose';

import history from '../../state/history';

type SelectionPropsType = {
  onFindAGiftTouchTap: Function,
}

const enhance = withProps(() => ({
  onFindAGiftTouchTap: () => history.push('/select'),
}));

const Selection = ({ onFindAGiftTouchTap }: SelectionPropsType) => (
  <div>
    AIRLALA Selection
    <RaisedButton primary label="FIND A GIFT" onTouchTap={onFindAGiftTouchTap} />
  </div>
);

export default enhance(Selection);
