import React from 'react';
import hiwImage from './img/slider_hiw.jpg';

const HowItWorks = () => (
  <div style={{ overflow: 'hidden' }}>
    <img src={hiwImage} alt="Gift" style={{ maxHeight: 'calc(100vh - 240px)', margin: '0 auto' }} />
    <div className="custom-slide">
      Matchmaking international buyers with local partners.
    </div>
  </div>
);

export default HowItWorks;
