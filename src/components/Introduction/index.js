import React from 'react';
import Slider from 'react-slick';

import GetStarted from './GetStarted';
import Foundation from './Foundation';
import Process from './Process';
import HowItWorks from './HowItWorks';
import MatchMake from './MatchMake';
import EndService from './EndService';

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  draggable: true,
};

const Introduction = () => (
  <div>
    <Slider {...sliderSettings}>
      <div><GetStarted /></div>
      <div><Foundation /></div>
      <div><Process /></div>
      <div><HowItWorks /></div>
      <div><MatchMake /></div>
      <div><EndService /></div>
    </Slider>
  </div>
);

export default Introduction;
