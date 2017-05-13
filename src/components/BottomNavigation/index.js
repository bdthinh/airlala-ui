// @flow
import React from 'react';
import Paper from 'material-ui/Paper';
import css from 'css-template';

import Env from './env';

const bottomNavigationStyles = css`
  bottom: 0;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1150;
`;

type BottomNavigationPropsType = {
  bigScreen: boolean,
};

const BottomNavigation = ({ bigScreen }: BottomNavigationPropsType) => (
  <div>
    <div style={{ height: 64, width: '100%' }} />
    <Paper zDepth={1} style={bottomNavigationStyles}>
      <Env bigScreen={bigScreen} />
    </Paper>
  </div>
);

export default BottomNavigation;
