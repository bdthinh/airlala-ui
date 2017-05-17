import React from 'react';
import { connect } from 'react-redux';
import css from 'css-template';
import { Card } from 'material-ui/Card';
import Slider from 'material-ui/Slider';


import {
  changePriceRange,
  csPriceRangeSelector,
} from './currentSelection.state';

const cardStyles = css`
  font-size: 14px;
  width: calc(100% - 12px);
  margin: 0 6px 12px;
  display: inline-block;
  text-align: center;
`;

const contentStyles = css`
  margin-top: 36px;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
`;

const PRICE_RANGES = [
  '0,25',
  '25,50',
  '50,100',
  '100,200',
  '200,10000',
];

const displayPrice = (range) => {
  const min = range.split(',')[0];
  const max = range.split(',')[1];

  if (max === '10000') {
    return `$${min} +`;
  }
  return `$${min} - ${max}`;
};

const enhance = connect(
  state => ({
    current: csPriceRangeSelector(state),
  }),
  {
    onChange: (event, value) => changePriceRange(PRICE_RANGES[value]),
  },
);

type BudgetCardPropsType = {
  current: string,
  onChange: Function,
};

const BudgetCard = ({ current, onChange }: BudgetCardPropsType) => (
  <Card style={cardStyles}>
    <div style={contentStyles}>
      <div>
        {displayPrice(current)}
      </div>
      <Slider
        min={0}
        max={4}
        step={1}
        value={PRICE_RANGES.indexOf(current)}
        onChange={onChange}
      />
    </div>
  </Card>
);


export default enhance(BudgetCard);
