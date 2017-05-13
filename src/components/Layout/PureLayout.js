import { Route } from 'react-router-dom';
import always from 'lodash/fp/always';
import { grey200 } from 'material-ui/styles/colors';
import css from 'css-template';
import React from 'react';

type PureLayoutPropsType = {
  bigScreen: boolean,
};

const RenderNothing = always(null);
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
    <Route exact path="/" component={RenderNothing} />
  </div>
);

export default PureLayout;
