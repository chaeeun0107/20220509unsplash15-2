import { ActionCreators } from '../../redux/searchReducer';
import API from '../../api';

export const searchCollections = (params) => async (dispatch, getState) => {
  dispatch(ActionCreators.searchCollectionsPending());
  try {
    const data = await API.searchCollections(params);
    dispatch(ActionCreators.searchCollectionsFulfilled(data));
  } catch (err) {
    dispatch(ActionCreators.searchCollectionsRejected(err));
  }
};
