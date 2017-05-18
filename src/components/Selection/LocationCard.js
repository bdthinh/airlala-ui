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
  border: 1px solid #E1E1E1;
  padding: 6px 12px;
`;

const spanRangeCurrentStyles = css`
  composes: ${spanRangeStyles},
  border: 1px solid #F57C00;
`;

const cardStyles = css`
  font-size: 14px;
  width: calc(100% - 12px);
  margin: 0 6px 12px;
  display: inline-block;
  text-align: center;
`;

const contentStyles = css`
  margin: 24px 12px;
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
`;


const headerStyle = css`
  text-transform: uppercase;
  color: #BDBDBD;
  font-weight: 400;
  font-size: 11px;
  letter-spacing: 1.1px;
  padding-bottom: 18px;
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
      <div style={headerStyle}>
        Location
      </div>

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
