import React from 'react';
import Slider from 'react-slick';
import FlatButton from 'material-ui/FlatButton';
import { withProps } from 'recompose';
import { map } from 'lodash';
import css from 'css-template';
import CartIcon from 'material-ui/svg-icons/action/shopping-cart';

import './index.css';

import TopNavigation from '../Layout/TopNavigation';
import ChatButton from '../Layout/ChatButton';

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
  gifts: Array<GiftType>,
};

const enhance = withProps(({ orderKey }) => ({
  gifts: {
    1: {
      name: 'The 3xu love matchbox',
      image: 'https://firebasestorage.googleapis.com/v0/b/airlala-7b1b2/o/products%2F-KkGEbkYrmtIuWh97Hwb.jpg?alt=media&token=6ef37e78-48d8-45c0-b6eb-45e0b22fc97b',
      price: '$2.00',
      description: 'Handmade products are designed uniquely and creatively. It is used to decorate or giving your loved ones the most unique things. Made in Vietnam',
    },
    2: {
      name: 'The Authentique classic teapot',
      image: 'https://firebasestorage.googleapis.com/v0/b/airlala-7b1b2/o/products%2F-KkGEg7EBsn9fCEaw56w.jpg?alt=media&token=b6fd8bcf-9299-4c88-895a-0c42598b6d36',
      price: '$40.00',
      description: 'Vietnamese ceramics don’t have mean to ancient Vietnamese ceramics. The look and texture of the ceramics is based on the old, new drawings, the flowers are hand painted with palm, each stroke. They want to retain the spirit and charm of ancient Vietnam. Products designed by Authentique. All Authentique products are handmade from artist’s hands with all the heart and their dedication. Made in VietNam',
    },
  },
}));

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
  padding: 14px;
  border-top: 1px solid #BDBDBD;
  background-color: #fff;
`;

const ProductList = ({ gifts }: ProductListPropsType) => (
  <div>
    <TopNavigation
      headerText="GIFT SELECTION"
      cancel
      rightElement={ChatButton}
    />

    <div style={{ padding: '12px 24px' }} className="product-list">
      <Slider {...sliderSettings}>
        {
          gifts && map(gifts, (gift, key) => (
            <div key={key}>
              <div style={{ padding: '6px' }}>
                <img style={{ maxWidth: '100%' }} src={gift.image} alt={gift.name} />
                <div style={{ textAlign: 'center' }}>
                  <div style={nameStyles}>{gift.name}</div>
                  <div style={priceStyles}>{gift.price}</div>
                  <FlatButton label="Take this" style={takeThisStyles} />
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
      </Slider>
      <CartIcon style={cartIconStyles} />
    </div>
  </div>
);

export default enhance(ProductList);
