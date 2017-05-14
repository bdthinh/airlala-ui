import React from 'react';
import Slider from 'react-slick';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { flow, over } from 'lodash/fp';


import Foundation from './Foundation';
import Process from './Process';
import HowItWorks from './HowItWorks';
import MatchMake from './MatchMake';
import EndService from './EndService';

import history from '../../state/history';
import { skipOrDoneIntroduction } from './introduction.state';

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

const IntroductionSlider = ({
  onClickSkip,
}: introductionSliderPropsType) => (
  <div>
    <Slider {...sliderSettings}>
      <div><Foundation /></div>
      <div><Process /></div>
      <div><HowItWorks /></div>
      <div><MatchMake /></div>
      <div><EndService /></div>
    </Slider>
    <FlatButton label="Skip" onClick={onClickSkip} />
  </div>
);

export default enhance(IntroductionSlider);
