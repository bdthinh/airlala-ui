import React from 'react';
import { Card, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import css from 'css-template';
import { withProps } from 'recompose';

import AvatarWithName from '../Layout/SmallAvatarWithName';
import type { OrderType } from '../../types/Order';
import history from '../../state/history';

type OrderCardPropsType = {
  order: OrderType,
  onTouchTapAction: Function,
};

const displayPrice = range => `$${range.split(',')[0]} - ${range.split(',')[1]}`;

const cardStyles = css`
  font-size: 14px;
  width: calc(50% - 12px);
  margin: 0 6px 12px;
  display: inline-block;
  text-align: center;
`;

const contentStyles = css`
  margin-top: 12px;
  margin-bottom: 12px;
`;

const textStyles = css`
  margin: 12px 0 6px;
`;

const nameStyles = css`
  font-size: 16px;
  font-weight: 300;
`;

const infoStyles = css`
  margin-top: 6px;
  font-size: 12px;
  font-weight: 200;
`;

const enhance = withProps(({ order: { key } }) => ({
  onTouchTapAction: () => history.push(`/orders/${key}`),
}));

const OrderCard = ({
  order: {
    occasion,
    priceRange,
    receiverName,
    status,
  },
  onTouchTapAction,
}: OrderCardPropsType) => (
  <Card style={cardStyles}>
    <div style={contentStyles}>
      <AvatarWithName name={receiverName} />
      <div style={textStyles}>
        <div style={nameStyles}>{receiverName}</div>
        <div style={infoStyles}>{occasion} | {displayPrice(priceRange)}</div>
      </div>
      <CardActions>
        <RaisedButton
          primary
          label={status}
          onTouchTap={onTouchTapAction}
        />
      </CardActions>
    </div>
  </Card>
);

export default enhance(OrderCard);
