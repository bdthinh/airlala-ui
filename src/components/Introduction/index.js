// @flow
import React from 'react';
import css from 'css-template';

import GetStarted from './GetStarted';

const introductionStyles = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  text-align: center;
  padding: 0 24px;
`;

const Introduction = () => (
  <div style={introductionStyles}>
    <GetStarted />
  </div>
);

export default Introduction;
