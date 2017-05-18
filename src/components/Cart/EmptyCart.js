import React from 'react';
import css from 'css-template';
import ShoppingCartIcon from 'material-ui/svg-icons/action/shopping-cart';

const emptyCartStyles = css`
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
`;

const EmptyCart = () => (
  <div style={emptyCartStyles}>
    <div style={{ marginLeft: '12px' }}>
      <ShoppingCartIcon style={{ width: '72px', height: '72px' }} />
    </div>
    You have not chosen any product
  </div>
);

export default EmptyCart;
