import React from 'react';
import foundationImage from './img/demo.jpg';

const Foundation = () => (
  <div style={{ overflow: 'hidden' }}>
    <img src={foundationImage} alt="Gift" style={{ maxHeight: 'calc(100vh - 240px)' }} />
    <p className="custom-slide">
      AirLaLa makes giving gifts as wonderful as getting them.
    </p>
  </div>
);

export default Foundation;
