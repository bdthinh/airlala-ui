import React from 'react';
import { withProps } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import DoneIcon from 'material-ui/svg-icons/action/done';
import css from 'css-template';

import history from '../../state/history';

import OrderCard from '../Order/OrderCard';
import AnnouncementCard from './AnnouncementCard';

const enhance = withProps(() => ({
  onCheckTouchTap: () => history.push('/orders'),
}));

type PromptPropsType = {
  onCheckTouchTap: Function,
};

const buttonWrapperStyles = css`
  position: fixed;
  bottom: 36px;
  left: 0;
  right: 0;
  text-align: center;
`;

const cardAnnouncementStyles = css`
  margin: 0 6px;
`;

const exampleOrder = {
  key: 1,
  occasion: 'Sorry',
  priceRange: '20,60',
  receiverName: 'Helena Lam',
  status: 'Looking',
};

const Prompt = ({
  onCheckTouchTap,
}: PromptPropsType) => (
  <div>
    <div style={{ textAlign: 'center', padding: '24px 0' }}>
      <OrderCard order={exampleOrder} />
    </div>

    <div style={cardAnnouncementStyles}>
      <AnnouncementCard name="Helena Lam" />
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

export default enhance(Prompt);
