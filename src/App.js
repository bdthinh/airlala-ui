// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { compose, withState, lifecycle } from 'recompose';

type AppPropsType = {
  store: any,
  rehydrated: boolean,
};

const renderNothing = <div />;

const App = ({ store, rehydrated }: AppPropsType) => (
  <Provider store={store}>
    {
      rehydrated
      ? <div name="application">
        <Helmet
          defaultTitle="appName"
          title="appName"
          links={[
            { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
          ]}
        />
        Hello from React app
      </div>
      : renderNothing
    }
  </Provider>
);

const enhance = compose(
  withState('rehydrated', 'completeRehydrated', false),
  lifecycle({
    componentWillMount() {
      // eslint-disable-next-line immutable/no-this
      persistStore(
        this.props.store,
        { whitelist: [] },
        () => {
          this.props.completeRehydrated(true);
        },
      );
    },
  }),
);

export default enhance(App);
