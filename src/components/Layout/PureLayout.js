import { Route } from 'react-router-dom';
import { renderNothing } from 'recompose';
import { grey200 } from 'material-ui/styles/colors';
import React from 'react';


type PureLayoutPropsType = {
  bigScreen: boolean,
};

const PureLayout = (
  {
    bigScreen,
  }: PureLayoutPropsType,
) => (
  <div style={{ background: grey200, minHeight: '100vh' }} offsetTop={0}>
    {bigScreen && 'AIRLALA on web application'}
    {!bigScreen && 'AIRLALA on mobile application'}
    <Route exact path="/" component={renderNothing} />
  </div>
);

export default PureLayout;
