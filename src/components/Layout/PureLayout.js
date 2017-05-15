import { Route } from 'react-router-dom';
import always from 'lodash/fp/always';
import { grey200 } from 'material-ui/styles/colors';
import css from 'css-template';
import React from 'react';

import Introduction from '../Introduction';
import IntroductionSlider from '../Introduction/Slider';
import Order from '../Order';
import SignUp from '../SignUp';
import Verification from '../Verification';
import Login from '../Login';
import BottomNavigation from '../BottomNavigation';
import Selection from '../Selection';
import Profile from '../Profile';
import ProfileEditForm from '../Profile/EditForm';

import Payment from '../Settings/Payment';
import Addresses from '../Settings/Addresses';
import FeedBack from '../Settings/FeedBack';
import TermsAndConditions from '../Settings/TermsAndConditions';
import Faqs from '../Settings/Faqs';

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
    <Route exact path="/getStarted" component={IntroductionSlider} />

    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/verification" component={Verification} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/orders" component={Order} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/profile/edit" component={ProfileEditForm} />
    <Route exact path="/select" component={Selection} />

    <Route exact path="/payment" component={Payment} />
    <Route exact path="/addresses" component={Addresses} />
    <Route exact path="/feedback" component={FeedBack} />
    <Route exact path="/terms" component={TermsAndConditions} />
    <Route exact path="/faqs" component={Faqs} />

    <BottomNavigation bigScreen={bigScreen} />
  </div>
);

export default PureLayout;
