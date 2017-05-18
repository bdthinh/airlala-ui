// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { persistStore } from 'redux-persist';
import { compose, withState, lifecycle } from 'recompose';

import Layout from './components/Layout';

import THEME_CONFIG from './config/theme.json';

export const theme = {
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
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      {rehydrated ? <div name="application">
        <Helmet
          defaultTitle="AirLala"
          title="AirLala"
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
        { whitelist: ['session', 'currentUser', 'currentSelection', 'selectionStatus'] },
        () => {
          this.props.completeRehydrated(true);
        },
      );
    },
  }),
);

export default enhance(App);
