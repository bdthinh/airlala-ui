import { Route } from 'react-router-dom';
import always from 'lodash/fp/always';
import { grey200 } from 'material-ui/styles/colors';
import css from 'css-template';
import React from 'react';

import Introduction from '../Introduction';

type PureLayoutPropsType = {
  bigScreen: boolean,
};

export const RenderNothing = always(null);

const pureLayoutStyles = css`
  background: ${grey200};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PureLayout = (
  {
    bigScreen,
  }: PureLayoutPropsType,
) => (
  <div style={pureLayoutStyles} offsetTop={0}>
    {bigScreen && 'AIRLALA on web application'}
    {!bigScreen && 'AIRLALA on mobile application'}
    <Route exact path="/" component={Introduction} />
  </div>
);

export default PureLayout;
