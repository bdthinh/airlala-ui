import { Route } from 'react-router-dom';
import always from 'lodash/fp/always';
import { grey200 } from 'material-ui/styles/colors';
import css from 'css-template';
import React from 'react';

import Introduction from '../Introduction';
import BottomNavigation from '../BottomNavigation';

type PureLayoutPropsType = {
  bigScreen: boolean,
};

export const RenderNothing = always(null);

const pureLayoutStyles = css`
  background: ${grey200};
  min-height: 100vh;
`;

const PureLayout = (
  {
    bigScreen,
  }: PureLayoutPropsType,
) => (
  <div style={pureLayoutStyles}>
    <Route exact path="/" component={Introduction} />

    <BottomNavigation bigScreen={bigScreen} />
  </div>
);

export default PureLayout;
