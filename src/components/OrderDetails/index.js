import React from 'react';
import { withProps } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
import DoneIcon from 'material-ui/svg-icons/action/done';
import css from 'css-template';

import history from '../../state/history';

import type { OrderType } from '../../types/Order';
import { fetchOrderFromFirebase } from '../../firebase/orders.state';


import AvatarWithName from '../Layout/AvatarWithName';
import TopNavigation from '../Layout/TopNavigation';
import ChatButton from '../Layout/ChatButton';

const buttonWrapperStyles = css`
  position: fixed;
  bottom: 36px;
  left: 0;
  right: 0;
  text-align: center;
`;

const fieldWrapperStyles = css`
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

const stepperWrapperStyles = css`
  margin: 0 36px;
`;

const enhance = withProps(({ orderKey }) => ({
  order: fetchOrderFromFirebase(orderKey),
  onCheckTouchTap: () => history.push('/orders'),
}));

const displayPrice = range => `$${range.split(',')[0]} - ${range.split(',')[1]}`;

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
    <TopNavigation
      headerText="GIFT FOR"
      rightElement={ChatButton}
    />

    <div style={{ textAlign: 'center' }}>
      <div style={fieldWrapperStyles}>
        <AvatarWithName name={order.receiverName} />
        <div style={textStyles}>
          <div style={nameStyles}>{order.receiverName}</div>
          <div style={infoStyles}>{order.occasion} | {displayPrice(order.priceRange)}</div>
        </div>
      </div>
    </div>

    <div style={stepperWrapperStyles}>
      <Stepper activeStep={getActiveStep(order.status)} orientation="vertical">
        <Step>
          <StepLabel>LOOKING</StepLabel>
          <StepContent>
            {order.status === 'Looking' && <p>
              We&quot;ll report back promptly with wonderful gift for {order.receiverName}
            </p>}
          </StepContent>
        </Step>

        <Step>
          <StepLabel>GIFTS READY</StepLabel>
        </Step>

        <Step>
          <StepLabel>ORDERED</StepLabel>
        </Step>
      </Stepper>
    </div>

    <div style={buttonWrapperStyles}>
      <RaisedButton
        primary
        icon={<DoneIcon />}
        onTouchTap={onCheckTouchTap}
      />
    </div>
  </div>
);

export default enhance(OrderDetails);
