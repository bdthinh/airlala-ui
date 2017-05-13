import { Router, Route } from 'react-router';
import MediaQuery from 'react-responsive';
import React from 'react';

import history from '../../state/history';
import PureLayout from './PureLayout';

class Layout extends React.Component {
  componentDidMount() {}

  props: {};

  render() {
    return (
      <Router history={history}>
        <Route exact path="/">
          {() => (
            <MediaQuery minDeviceWidth={700}>
              {bigScreen => (
                <PureLayout
                  bigScreen={bigScreen}
                />
              )}
            </MediaQuery>
          )}
        </Route>
      </Router>
    );
  }
}

export default Layout;
