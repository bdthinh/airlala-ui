import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import css from 'css-template';

import history from '../../state/history';

import TopNavigation from '../Layout/TopNavigation';
import ReceiverCard from './ReceiverCard';
import LocationCard from './LocationCard';
import OccasionCard from './OccasionCard';
import BudgetCard from './BudgetCard';
import StyleCard from './StyleCard';
import DetailsCard from './DetailsCard';

import { requestGifts } from './currentSelection.state';

type SelectionPropsType = {
  onRequestGiftClick: Function,
}

const buttonWrapperStyles = css`
  text-align: center;
`;

const enhance = connect(
  null,
  dispatch => ({
    onRequestGiftClick: () => {
      dispatch(requestGifts);
      history.push('/select/prompt');
    },
  })
);

const selectionWrapperStyles = css`
  margin: 0 6px;
`;


const Selection = ({ onRequestGiftClick }: SelectionPropsType) => (
  <div>
    <TopNavigation headerText="AIRLALA" />
    <div style={selectionWrapperStyles}>
      <ReceiverCard />
      <LocationCard />
      <OccasionCard />
      <BudgetCard />
      <StyleCard />
      <DetailsCard />
    </div>

    <div style={buttonWrapperStyles}>
      <RaisedButton primary label="Request Gift" onTouchTap={onRequestGiftClick} />
    </div>
  </div>
);

export default enhance(Selection);
