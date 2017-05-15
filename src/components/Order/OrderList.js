import React from 'react';
import Paper from 'material-ui/Paper';
import css from 'css-template';
import { Card, CardActions } from 'material-ui/Card';
import { withProps } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';

import AvatarWithName from '../Layout/AvatarWithName';
import type { OrderType } from '../../types/Order';
import history from '../../state/history';

type OrderListPropsType = {
  orders: Array<OrderType>,
  onViewOrderDetails: Function,
};

const paperStyles = css`{
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 6px;
  padding: 6px 12px;
}`;

const displayPriceRange = (priceRange) => {
  const min = priceRange.split(',')[0];
  const max = priceRange.split(',')[0];
  return `$${min} - ${max}`;
};

const enhance = withProps(() => ({
  onViewOrderDetails: orderKey => history.push(`/order/${orderKey}`),
}));

const OrderList = ({
  orders,
  onViewOrderDetails,
}: OrderListPropsType) => (
  <div>
    <Paper style={paperStyles}>
      {orders && orders.map((orderKey, order) => (
        <Card>
          <AvatarWithName name={order.receiverName} />
          <div>{order.receiverName}</div>
          <div>{order.occasion}</div>
          <div>{displayPriceRange(order.priceRange)}</div>
          <CardActions>
            <RaisedButton
              primary
              label={order.status}
              onTouchTap={() => onViewOrderDetails(orderKey)}
            />
          </CardActions>
        </Card>
      ))}
    </Paper>
  </div>
);

export default enhance(OrderList);
