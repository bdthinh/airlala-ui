import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { withProps } from 'recompose';

import ProfileButton from './ProfileButton';
import OrderList from './OrderList';

import history from '../../state/history';

type OrderPropsType = {
  onFindAGiftTouchTap: Function,
}

const enhance = withProps(() => ({
  onFindAGiftTouchTap: history.push('/select'),
}));

const Order = ({ onFindAGiftTouchTap }: OrderPropsType) => (
  <div>
    <ProfileButton />
    AIRLALA
    <OrderList />
    <RaisedButton primary label="FIND A GIFT" onTouchTap={onFindAGiftTouchTap} />
  </div>
);

export default enhance(Order);
