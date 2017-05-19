import React from 'react';
import Slider from 'react-slick';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import { withProps, compose } from 'recompose';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { find, negate, path } from 'lodash/fp';
import css from 'css-template';
import CartIcon from 'material-ui/svg-icons/action/shopping-cart';

import './index.css';

import spinner from '../../utils/spinner';
import { fetchOrderFromFirebase } from '../../firebase/orders.state';

import TopNavigation from '../Layout/TopNavigation';
import ChatButton from '../Layout/ChatButton';
import Cart from '../Cart';
import {
  toggleCart,
  addToCart,
  removeCart,
  cartItemsSelector,
} from '../Cart/cart.state';

const sliderSettings = {
  customPaging: i => (<span>{i + 1}</span>),
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  draggable: true,
};

type GiftType = {
  ages: string,
  artisanID: string,
  description: string,
  image: string,
  location: string,
  name: string,
  occasions: string,
  price: string,
  relationship: string,
  sex: string,
  tags: string,
};

type ProductListPropsType = {
  orderKey: string,
  gifts: Array<GiftType>,
  cartItems: Array<GiftType>,
  cartItemsCount: number,
  onToggleCart: Function,
  onTakeThisTouchTap: Function,
  onThinkAgainTouchTap: Function,
};

const connectToRedux = connect(
  state => ({
    cartItemsCount: cartItemsSelector(state).length,
    cartItems: cartItemsSelector(state),
  }),
  {
    onToggleCart: toggleCart,
    onTakeThisTouchTap: product => addToCart(product),
    onThinkAgainTouchTap: product => removeCart(product),
  }
);

const enhanceProps = withProps(({ orderKey }) => ({
  order: fetchOrderFromFirebase(orderKey),
}));

const enhance = compose(
  connectToRedux,
  enhanceProps,
  spinner(
    () => {},
    negate(path('order')),
  ),
  withProps(({ order }) => ({
    gifts: path('gifts', order),
  })),
);

const nameStyles = css`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1.1px;
  text-align: center;
  padding: 24px;
`;

const priceStyles = css`
  font-weight: 300;
  font-size: 12px;
`;

const takeThisStyles = css`
  margin: 24px;
  border: 1px solid #000;
`;

const detailsHeaderStyles = css`
  text-transform: uppercase;
  color: #BDBDBD;
  font-weight: 400;
  font-size: 11px;
  letter-spacing: 1.1px;
  margin-bottom: 18px;
  text-align: center;
  position: relative;
`;

const spanHRStyles = css`
  height: 1px;
  min-width: 100%;
  position: absolute;
  top: 50%;
  background: radial-gradient(ellipse at center, #fff 25%, #cecece 100%);
  left: 0;
`;

const cartIconStyles = css`
  position: fixed;
  bottom: 0px;
  right: 0px;
  border-left: 1px solid #BDBDBD;
  padding: 12px 14px;
  border-top: 1px solid #BDBDBD;
  background-color: #fff;
  min-height: 29px;
  min-width: 25px;
`;

const ProductList = ({
  orderKey,
  gifts,
  cartItems,
  onToggleCart,
  onTakeThisTouchTap,
  cartItemsCount,
  onThinkAgainTouchTap,
}: ProductListPropsType) => (
  <div>
    <TopNavigation
      headerText="GIFT SELECTION"
      cancel
      rightElement={ChatButton}
    />

    <div style={{ padding: '12px 24px' }} className="product-list">
      {gifts && <Slider {...sliderSettings}>
        {
          map(gifts, (gift, key) => (
            <div key={key}>
              <div style={{ padding: '6px' }}>
                <img style={{ maxWidth: '100%' }} src={gift.image} alt={gift.name} />
                <div style={{ textAlign: 'center' }}>
                  <div style={nameStyles}>{gift.name}</div>
                  <div style={priceStyles}>{gift.price}</div>
                  {
                    find(item => item.key === key, cartItems) ?
                      <FlatButton
                        label="Think again"
                        style={takeThisStyles}
                        onTouchTap={() => onThinkAgainTouchTap({ ...gift, key })}
                      /> :
                      <FlatButton
                        label="Take this"
                        style={takeThisStyles}
                        onTouchTap={() => onTakeThisTouchTap({ ...gift, key })}
                      />
                  }
                </div>

                <div style={detailsHeaderStyles}>
                  <span style={spanHRStyles} />
                  <span style={{ position: 'relative' }}>Details</span>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
                  {gift.description}
                </p>
              </div>
            </div>
          ))
        }
      </Slider>}
      {cartItemsCount === 0
        ? <div style={cartIconStyles}><CartIcon onTouchTap={onToggleCart} /></div>
        : <Badge
          badgeContent={cartItemsCount}
          secondary
          style={cartIconStyles}
          onTouchTap={onToggleCart}
        >
          <CartIcon />
        </Badge>
      }
    </div>
    <Cart orderKey={orderKey} />
  </div>
);

export default enhance(ProductList);
