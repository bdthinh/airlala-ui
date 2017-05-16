import React from 'react';
import { withProps } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
import DoneIcon from 'material-ui/svg-icons/action/done';
import css from 'css-template';

import history from '../../state/history';

import AvatarWithName from '../Layout/AvatarWithName';
import TopNavigation from '../Layout/TopNavigation';
import ChatButton from '../Layout/ChatButton';

const enhance = withProps(() => ({
  onCheckTouchTap: () => history.push('/orders'),
}));

type OrderDetailsPropsType = {
  onCheckTouchTap: Function,
};

const STEPS = ['Looking', 'Gifts Ready', 'Ordered'];

const getActiveStep = status => STEPS.indexOf(status);

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

const OrderDetails = ({
  onCheckTouchTap,
}: OrderDetailsPropsType) => (
  <div>
    <TopNavigation
      headerText="GIFT FOR"
      rightElement={ChatButton}
    />

    <div style={{ textAlign: 'center' }}>
      <div style={fieldWrapperStyles}>
        <AvatarWithName name="Helena Lam" />
        <div style={textStyles}>
          <div style={nameStyles}>Helena Lam</div>
          <div style={infoStyles}>Sorry | $50 - 100</div>
        </div>
      </div>
    </div>

    <div style={stepperWrapperStyles}>
      <Stepper activeStep={getActiveStep('Looking')} orientation="vertical">
        <Step>
          <StepLabel>LOOKING</StepLabel>
          <StepContent style={{ fontSize: '12px' }}>
            <p>We&quot;ll report back promptly with wonderful gift for Helena Lam</p>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>GIFTS READY</StepLabel>
          <StepContent style={{ fontSize: '12px' }}>
            <p>We&quot;ll report back promptly with wonderful gift for Helena Lam</p>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>ORDERED</StepLabel>
          <StepContent style={{ fontSize: '12px' }}>
            <p>We&quot;ll report back promptly with wonderful gift for Helena Lam</p>
          </StepContent>
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
