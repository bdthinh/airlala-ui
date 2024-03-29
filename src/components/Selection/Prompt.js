import React from 'react';
import { connect } from 'react-redux';
import { withProps, compose } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import DoneIcon from 'material-ui/svg-icons/action/done';
import css from 'css-template';
import { path } from 'lodash/fp';

import history from '../../state/history';

import {
  currentSelectionSelector,
  orderKeySelector,
} from './currentSelection.state';
import type { OrderType } from '../../types/Order';

import OrderCard from '../Order/OrderCard';
import AnnouncementCard from './AnnouncementCard';

const enhance = compose(
  connect(
    state => ({
      order: {
        ...currentSelectionSelector(state),
        status: 'looking',
        key: orderKeySelector(state),
      },
    })
  ),
  withProps(() => ({
    onCheckTouchTap: () => history.push('/orders'),
  })),
);

type PromptPropsType = {
  order: OrderType,
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

const Prompt = ({
  order,
  onCheckTouchTap,
}: PromptPropsType) => (
  <div>
    <div style={{ textAlign: 'center', padding: '24px 0' }}>
      <OrderCard order={order} />
    </div>

    <div style={cardAnnouncementStyles}>
      <AnnouncementCard name={order.receiverName} />
    </div>

    <div style={buttonWrapperStyles}>
      <RaisedButton
        primary
        icon={<DoneIcon />}
        disabled={!path('key', order)}
        onTouchTap={onCheckTouchTap}
      />
    </div>
  </div>
);

export default enhance(Prompt);
