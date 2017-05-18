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
  margin-top: 36px;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
  overflow: hidden;
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
  border: 1px solid red;
`;

const spanRangeCurrentStyles = css`
  composes: ${spanRangeStyles},
  background-color: blue;
`;

const OccasionCard = ({ current, onChange }: OccasionCardPropsType) => (
  <Card style={cardStyles}>
    <div style={contentStyles}>
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
