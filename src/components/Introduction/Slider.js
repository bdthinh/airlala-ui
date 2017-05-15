import React from 'react';
import Slider from 'react-slick';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { flow, over } from 'lodash/fp';
import css from 'css-template';

import TopNavigation from '../Layout/TopNavigation';
import Foundation from './Foundation';
import Process from './Process';
import HowItWorks from './HowItWorks';
import MatchMake from './MatchMake';
import EndService from './EndService';

import history from '../../state/history';
import { skipOrDoneIntroduction } from './introduction.state';

import './slider.css';

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  draggable: true,
};

const enhance = connect(
  null,
  dispatch => ({
    onClickSkip: over([
      flow(skipOrDoneIntroduction, dispatch),
      () => history.push('/signup'),
    ]),
  }),
);

type introductionSliderPropsType = {
  onClickSkip: Function,
};

const sliderWrapperStyles = css`
  height: calc(100vh - 128px);
  margin-top: 12px;
`;

const skipButtonStyles = css`
  position: absolute;
  right: 0;
  bottom: 18px;
`;

const IntroductionSlider = ({
  onClickSkip,
}: introductionSliderPropsType) => (
  <div>
    <TopNavigation />
    <div style={sliderWrapperStyles}>
      <Slider {...sliderSettings}>
        <div><Foundation /></div>
        <div><Process /></div>
        <div><HowItWorks /></div>
        <div><MatchMake /></div>
        <div><EndService /></div>
      </Slider>
    </div>
    <FlatButton label="Skip" onClick={onClickSkip} style={skipButtonStyles} />
  </div>
);

export default enhance(IntroductionSlider);
