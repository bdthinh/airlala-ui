import React from 'react';
import { withProps } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
import DoneIcon from 'material-ui/svg-icons/action/done';

import type { OrderType } from '../../types/Order';
import history from '../../state/history';

import { fetchOrderFromFirebase } from '../../firebase/orders.state';

import BackButton from '../Layout/BackButton';
import ChatButton from '../Layout/ChatButton';
import AvatarWithName from '../Layout/AvatarWithName';

const enhance = withProps(({ orderKey }) => ({
  order: fetchOrderFromFirebase(orderKey),
  onCheckTouchTap: () => history.push('/orders'),
}));

const displayPriceRange = (priceRange) => {
  const min = priceRange.split(',')[0];
  const max = priceRange.split(',')[0];
  return `$${min} - ${max}`;
};

type OrderDetailsPropsType = {
  order: OrderType,
  onCheckTouchTap: Function,
};

const STEPS = ['Looking', 'Gifts Ready', 'Ordered'];

const getActiveStep = status => STEPS.indexOf(status);

const OrderDetails = ({
  order,
  onCheckTouchTap,
}: OrderDetailsPropsType) => (
  <div>
    <div>
      <BackButton />
      Gift For
      <ChatButton />
    </div>

    <div>
      <AvatarWithName name={order.receiverName} />
      <div>{order.receiverName}</div>
      <div>{order.occasion}</div>
      <div>{displayPriceRange(order.priceRange)}</div>
    </div>

    <div>
      <Stepper activeStep={getActiveStep(order.status)} orientation="vertical">
        <Step>
          <StepLabel>LOOKING</StepLabel>
          {order.status === 'Looking' && <StepContent>
            <p>
              We&quot;ll report back promptly with wonderful gift for {order.receiverName}
            </p>
          </StepContent>}
        </Step>

        <Step>
          <StepLabel>GIFTS READY</StepLabel>
        </Step>

        <Step>
          <StepLabel>ORDERED</StepLabel>
        </Step>
      </Stepper>
    </div>

    <div>
      <RaisedButton
        primary
        icon={<DoneIcon />}
        onTouchTap={onCheckTouchTap}
      />
    </div>
  </div>
);

export default enhance(OrderDetails);
