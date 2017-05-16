import React from 'react';
import css from 'css-template';
import { map } from 'lodash/fp';

import type { OrderType } from '../../types/Order';
import OrderCard from './OrderCard';

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

const OrderList = ({ orders }: OrderListPropsType) => (
  <div style={wrapperCardsStyles}>
    {map((order, key) => (
      <OrderCard order={{ ...order, key }} />
    ), orders)}
  </div>
);

export default OrderList;
