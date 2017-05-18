import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import css from 'css-template';
import { withProps } from 'recompose';

import TopNavigation from '../Layout/TopNavigation';
import ProfileButton from './ProfileButton';
import ChatButton from '../Layout/ChatButton';
import OrderList from './OrderList';

import history from '../../state/history';

type OrderPropsType = {
  onSelectionTouchTap: Function,
};

const enhance = withProps(() => ({
  onSelectionTouchTap: () => history.push('/select'),
}));

const buttonWrapperStyles = css`
  position: fixed;
  bottom: 36px;
  left: 0;
  right: 0;
  text-align: center;
`;

const Order = ({ onSelectionTouchTap }: OrderPropsType) => (
  <div>
    <TopNavigation
      headerText="AIRLALA"
      leftElement={ProfileButton}
      rightElement={ChatButton}
    />

    <OrderList />

    <div style={buttonWrapperStyles}>
      <RaisedButton
        primary
        label="FIND A GIFT"
        onTouchTap={onSelectionTouchTap}
      />
    </div>
  </div>
);

export default enhance(Order);
