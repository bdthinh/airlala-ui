import React from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import css from 'css-template';
import RaisedButton from 'material-ui/RaisedButton';
import { flow, isEmpty } from 'lodash/fp';

import history from '../../state/history';
import { confirmOrder } from '../../firebase/orders.state';

import EmptyCart from './EmptyCart';
import {
  isShownCartSelector,
  cartItemsSelector,
  toggleCart,
} from './cart.state';

const flexRowStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

const flexColumnStyles = css`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 128px);
`;

const productListStyles = css`
  overflow: auto;
`;

const cartDrawerContainerStyles = css`
  display: flex;
  flex-direction: column;
  z-index: 1500;
`;

const itemNameStyles = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

const imageStyles = css`
  width: 48px;
  height: auto;
  margin: 0 8px;
  border-radius: 5px;
`;

const buttonWrapperStyles = css`
  position: fixed;
  bottom: 36px;
  left: 0;
  right: 0;
  text-align: center;
`;

type CartPropsType = {
  open: boolean,
  items: Array<Object>,
  onToggleCart: Function,
  onRemoveItemClick: Function,
  onCheckoutTouchTap: Function,
};

const connectToRedux = connect(
  state => ({
    open: isShownCartSelector(state),
    items: cartItemsSelector(state),
  }),
  (dispatch, props) => ({
    onToggleCart: flow(toggleCart, dispatch),
    onCheckoutTouchTap: () => {
      history.push('/confirmed');
      confirmOrder(props.orderKey);
    },
  }),
);

const enhance = compose(
  connectToRedux,
);

const Cart = ({
  open,
  items,
  onToggleCart,
  onCheckoutTouchTap,
}: CartPropsType) => (
  <Drawer
    open={open}
    openSecondary
    docked={false}
    width={300}
    onRequestChange={onToggleCart}
    containerStyle={cartDrawerContainerStyles}
  >
    {isEmpty(items) && <EmptyCart />}
    <div style={productListStyles}>
      {items.map(item => (
        <div key={item.key} style={{ marginTop: '12px' }}>
          <div style={flexRowStyles}>
            <img src={item.image} alt={item.name} style={imageStyles} />
            <div style={flexColumnStyles}>
              <strong style={itemNameStyles}>
                {item.name}
              </strong>
              <span>
                {item.price}
              </span>
            </div>
          </div>
          <Divider />
        </div>))
      }
    </div>
    {
      !isEmpty(items)
      && <div style={buttonWrapperStyles}>
        <RaisedButton
          primary
          label="Checkout"
          onTouchTap={onCheckoutTouchTap}
          buttonStyle={{ width: 'auto' }}
        />
      </div>
    }
  </Drawer>
);

export default enhance(Cart);
