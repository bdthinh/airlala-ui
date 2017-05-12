import { combineEpics } from 'redux-observable';

import locationsDialogEpic from '../components/LocationsDialog/locationsDialog.epic';
import searchBoxEpic from '../components/TopNav/searchBox.epic';

export default combineEpics(
  locationsDialogEpic,
  searchBoxEpic,
);
