import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'roboto-npm-webfont/style.css';
import createStore from './state/createStore';
import history from './state/history';
import App from './App';
import initFirebase from './firebase';
// import type { FirebaseAppType } from './firebase/types';
// import firebaseConfig from './config/firebase';

import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = createStore();

initFirebase()
  .then((app) => {
    ReactDOM.render(
      <App store={store} history={history} firebaseApp={app} />,
      document.getElementById('root')
    );

    if (module.hot) {
      module.hot.accept('./App', () => {
        // eslint-disable-next-line
        console.log('App hot reloaded');
        // eslint-disable-next-line global-require
        const NextApp = require('./App').default;
        ReactDOM.render(
          <NextApp store={store} history={history} />,
          document.getElementById('root')
        );
      });
    }
  });

// ReactDOM.render(
//   <App store={store} history={history} />,
//   document.getElementById('root')
// );
//
