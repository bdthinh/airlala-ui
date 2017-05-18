import React from 'react';
import css from 'css-template';
import { map } from 'lodash';
import { withProps, compose } from 'recompose';
import { connect } from 'react-redux';

import type { OrderType } from '../../types/Order';
import OrderCard from './OrderCard';

import { fetchOrdersFromFirebase } from '../../firebase/orders.state';

import { currentUserPhoneSelector } from '../SignUp/currentUser.state';

const wrapperCardsStyles = css`{
  max-width: 700px;
  padding: 6px 12px;
  height: calc(100vh - 180px);
  overflow: auto;
  font-size: 0;
}`;

type OrderListPropsType = {
  orders: Array<OrderType>,
};

const enhance = compose(
  connect(
    state => ({
      phone: currentUserPhoneSelector(state),
    }),
  ),
  withProps(({ phone }) => ({
    orders: fetchOrdersFromFirebase(phone),
  })),
);

const OrderList = ({ orders }: OrderListPropsType) => (
  <div style={wrapperCardsStyles}>
    {map(orders, (order, key) => (
      <OrderCard
        key={key}
        order={{ ...order, key }}
      />
    ))}
  </div>
);

export default enhance(OrderList);
