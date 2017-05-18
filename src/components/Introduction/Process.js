import React from 'react';
import processImage from './img/slider_process.jpg';

const Process = () => (
  <div style={{ overflow: 'hidden' }}>
    <img src={processImage} alt="Gift" style={{ maxWidth: '100%' }} />
    <div className="custom-slide">
      Promoting and fostering local artisans and young entrepreneurs.
    </div>
  </div>
);

export default Process;
