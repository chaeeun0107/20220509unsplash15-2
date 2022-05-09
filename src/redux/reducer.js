import { combineReducers } from 'redux';

import photosReducer from './photosReducer';
import searchReducer from './searchReducer';
import topicsReducer from './topicsReducer';

const reducer = combineReducers({
  photos: photosReducer,
  search: searchReducer,
  topics: topicsReducer,
});

export default reducer;
