// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { persistStore } from 'redux-persist';
import { compose, withState, lifecycle } from 'recompose';

import Layout from './components/Layout';

import THEME_CONFIG from './config/theme.json';

const theme = {
  appBar: {
    color: THEME_CONFIG.colors.bar,
  },
  palette: {
    primary1Color: THEME_CONFIG.colors.primary,
    accent1Color: THEME_CONFIG.colors.secondary,
  },
};

type AppPropsType = {
  store: any,
  rehydrated: boolean,
};


const App = ({ store, rehydrated }: AppPropsType) => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      {rehydrated ? <div name="application">
        <Helmet
          defaultTitle="MarketOI"
          title="MarketOI"
          links={[
            { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
          ]}
        />

        <Layout />
      </div> : null}
    </MuiThemeProvider>
  </Provider>
);

const enhance = compose(
  withState('rehydrated', 'completeRehydrated', false),
  lifecycle({
    componentWillMount() {
      // eslint-disable-next-line immutable/no-this
      persistStore(
        this.props.store,
        { whitelist: ['cart', 'locationsDialog', 'session'] },
        () => {
          this.props.completeRehydrated(true);
        },
      );
    },
  }),
);

export default enhance(App);
