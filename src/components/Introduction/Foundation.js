import React from 'react';
import foundationImage from './img/slider_foundation.jpg';

const Foundation = () => (
  <div style={{ overflow: 'hidden' }}>
    <img src={foundationImage} alt="Gift" style={{ maxWidth: '100%' }} />
    <p className="custom-slide">
      AirLaLa empowers local artisans and SMEs by AI-powered marketplace.
    </p>
  </div>
);

export default Foundation;
