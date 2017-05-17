import React from 'react';
import { connect } from 'react-redux';
import css from 'css-template';
import { Card } from 'material-ui/Card';

import {
  changeLocation,
  csLocationSelector,
} from './currentSelection.state';

const LOCATIONS = ['Ha Noi', 'Ho Chi Minh'];

type LocationCardPropsType = {
  current: string,
  onChange: Function,
};

const spanRangeStyles = css`
  margin: 0 6px;
  border: 1px solid red;
`;

const spanRangeCurrentStyles = css`
  composes: ${spanRangeStyles},
  background-color: blue;
`;

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

const enhance = connect(
  state => ({
    current: csLocationSelector(state),
  }),
  {
    onChange: location => changeLocation(location),
  }
);

const LocationCard = ({ current, onChange }: LocationCardPropsType) => (
  <Card style={cardStyles}>
    <div style={contentStyles}>
      {LOCATIONS.map(location => (
        <span
          style={location === current ? spanRangeCurrentStyles : spanRangeStyles}
          key={location}
          onTouchTap={() => onChange(location)}
        >
          {location}
        </span>
      ))}
    </div>
  </Card>
);

export default enhance(LocationCard);
