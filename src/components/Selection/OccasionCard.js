import React from 'react';
import { connect } from 'react-redux';
import css from 'css-template';
import { Card } from 'material-ui/Card';
import { capitalize } from 'lodash/fp';
import Slider from 'react-slick';

import {
  changeOccasion,
  csOccasionSelector,
} from './currentSelection.state';

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

type OccasionCardPropsType = {
  current: string,
  onChange: Function,
};

const sliderSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  draggable: true,
};

const enhance = connect(
  state => ({
    current: csOccasionSelector(state),
  }),
  {
    onChange: occasion => changeOccasion(occasion),
  }
);

const OCCASIONS = [
  'anniversary',
  'apology',
  'birthday',
  'congratulations',
  'thank you',
  'other',
];

const spanRangeStyles = css`
  margin: 0 6px;
  border: 1px solid #E1E1E1;
  padding: 48px 6px;
`;

const spanRangeCurrentStyles = css`
  composes: ${spanRangeStyles},
  border: 1px solid #F57C00;
`;

const headerStyle = css`
  text-transform: uppercase;
  color: #BDBDBD;
  font-weight: 400;
  font-size: 11px;
  letter-spacing: 1.1px;
  padding-bottom: 18px;
`;

const OccasionCard = ({ current, onChange }: OccasionCardPropsType) => (
  <Card style={cardStyles}>
    <div style={contentStyles}>
      <div style={headerStyle}>
        Occasion For Giving
      </div>

      <Slider {...sliderSettings}>
        {OCCASIONS.map(occasion => (
          <span
            style={occasion === current ? spanRangeCurrentStyles : spanRangeStyles}
            key={occasion}
            onTouchTap={() => onChange(occasion)}
          >
            {capitalize(occasion)}
          </span>
        ))}
      </Slider>
    </div>
  </Card>
);

export default enhance(OccasionCard);
