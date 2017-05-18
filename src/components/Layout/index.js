import { Router, Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import React from 'react';
import css from 'css-template';

import history from '../../state/history';
import Introduction from '../Introduction';
import IntroductionSlider from '../Introduction/Slider';
import Order from '../Order';
import OrderDetails from '../OrderDetails';
import ProductList from '../ProductList';
import SelectionPrompt from '../Selection/Prompt';
import Chat from '../Chat';
import SignUp from '../SignUp';
import Verification from '../Verification';
import Login from '../Login';
import Selection from '../Selection';
import Profile from '../Profile';
import ProfileEditForm from '../Profile/EditForm';

import Payment from '../Settings/Payment';
import Addresses from '../Settings/Addresses';
import FeedBack from '../Settings/FeedBack';
import TermsAndConditions from '../Settings/TermsAndConditions';
import Faqs from '../Settings/Faqs';
import NotFound from './NotFound';

import { enterHomePage } from './layout.state';

const connectToRedux = connect(
  null,
  { onEnterHomePage: enterHomePage },
);

const pureLayoutStyles = css`
  background: url('/airlala-bg.png') no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;
`;

class Layout extends React.Component {
  componentDidMount() {
    this.props.onEnterHomePage();
  }

  props: {
    onEnterHomePage: Function,
  };

  render() {
    return (
      <div style={pureLayoutStyles}>
        <Router history={history}>
          <MediaQuery minDeviceWidth={700}>
            {() => (
              <Switch>
                <Route exact path="/" component={Introduction} />
                <Route exact path="/getStarted" component={IntroductionSlider} />

                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/verification" component={Verification} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/orders" component={Order} />
                <Route
                  exact
                  path="/orders/:orderKey"
                  render={({ match: { params: { orderKey } } }) => (
                    <OrderDetails orderKey={orderKey} />
                  )}
                />
                <Route
                  path="/orders/:orderKey/gifts"
                  render={({ match: { params: { orderKey } } }) => (
                    <ProductList orderKey={orderKey} />
                  )}
                />

                <Route exact path="/chat" component={Chat} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/profile/edit" component={ProfileEditForm} />
                <Route exact path="/select" component={Selection} />
                <Route exact path="/select/prompt" component={SelectionPrompt} />

                <Route exact path="/payment" component={Payment} />
                <Route exact path="/addresses" component={Addresses} />
                <Route exact path="/feedback" component={FeedBack} />
                <Route exact path="/terms" component={TermsAndConditions} />
                <Route exact path="/faqs" component={Faqs} />
                <Route component={NotFound} />
              </Switch>
            )}
          </MediaQuery>
        </Router>
      </div>
    );
  }
}

export default connectToRedux(Layout);
