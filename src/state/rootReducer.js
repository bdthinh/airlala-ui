import { always } from 'lodash/fp';
import { reducers as apiCalls } from 'redux-api-call';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import bottomNavigationState from '../components/BottomNavigation/bottomNavigation.state';
import cartState from '../components/Cart/cart.state';
import checkoutState from '../components/Checkout/checkout.state';
import deliverySettingsState from '../components/Settings/deliverySettings.state';
import filterState from '../components/Filter/filter.state';
import leftNavigationState from '../components/LeftNavigation/leftNavigation.state';
import locationsDialogState from '../components/LocationsDialog/locationsDialog.state';
import mapState from '../components/LeftNavigation/MenuItem/mapMenuItem.state';
import metaBannerState from '../components/MetaBanner/metaBanner.state';
import notificationState from '../components/Notification/notification.state';
import productsState from '../components/ProductList/products.state';
import scheduleState from '../components/LeftNavigation/MenuItem/scheduleMenuItem.state';
import searchBoxState from '../components/TopNav/searchBox.state';
import supporter from '../components/Supporter/supporter.state';
import version from '../../GIT_COMMIT.json';
import selections from '../components/Selections/selections.state';

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  version: always(version),
  session: (x = {}) => x,
  ...apiCalls,
  ...bottomNavigationState,
  ...cartState,
  ...checkoutState,
  ...deliverySettingsState,
  ...filterState,
  ...leftNavigationState,
  ...locationsDialogState,
  ...mapState,
  ...metaBannerState,
  ...notificationState,
  ...productsState,
  ...scheduleState,
  ...searchBoxState,
  ...selections,
  ...supporter,
});
