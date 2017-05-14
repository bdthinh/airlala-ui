// @flow
import React from 'react';
import css from 'css-template';

import GetStarted from './GetStarted';

const introductionStyles = css`
  min-height: 100vh;
  text-align: center;
`;

const Introduction = () => (
  <div style={introductionStyles}>
    <GetStarted />
  </div>
);

export default Introduction;
