import { Router, Route } from 'react-router';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import React from 'react';

import history from '../../state/history';
import PureLayout from './PureLayout';

import { enterHomePage } from './layout.state';

const connectToRedux = connect(
  null,
  { onEnterHomePage: enterHomePage },
);

class Layout extends React.Component {
  componentDidMount() {
    this.props.onEnterHomePage();
  }

  props: {
    onEnterHomePage: Function,
  };

  render() {
    return (
      <Router history={history}>
        <Route exact path="/">
          {() => (
            <MediaQuery minDeviceWidth={700}>
              {bigScreen => (
                <PureLayout
                  bigScreen={bigScreen}
                  onEnterHomePage={this.props.onEnterHomePage}
                />
              )}
            </MediaQuery>
          )}
        </Route>
      </Router>
    );
  }
}

export default connectToRedux(Layout);
