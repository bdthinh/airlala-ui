import React from 'react';
import endserviceImage from './img/slider_endservice.jpg';

const EndService = () => (
  <div style={{ overflow: 'hidden' }}>
    <img src={endserviceImage} alt="Gift" style={{ maxHeight: 'calc(100vh - 240px)', margin: '0 auto' }} />
    <div className="custom-slide">
      Together, we can nurture artinsanship and SMEs.
    </div>
  </div>
);

export default EndService;
