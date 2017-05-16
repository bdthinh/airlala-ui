import React from 'react';
import css from 'css-template';

import OrderCard from './OrderCard';

const wrapperCardsStyles = css`{
  max-width: 700px;
  padding: 6px 12px;
  height: calc(100vh - 180px);
  overflow: auto;
  font-size: 0;
}`;

const exampleOrder = {
  key: 1,
  occasion: 'Sorry',
  priceRange: '20,60',
  receiverName: 'Helena Lam',
  status: 'Looking',
};

const OrderList = () => (
  <div style={wrapperCardsStyles}>
    <OrderCard order={exampleOrder} />
  </div>
);

export default OrderList;
