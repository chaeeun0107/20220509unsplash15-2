import API from '../../api';
import { ActionCreators } from '../../redux/searchReducer';

export const searchRelated = (params) => async (dispatch) => {
  // pending
  dispatch(ActionCreators.searchRelatedPending());
  try {
    const { related_searches } = await API.search(params);
    // fulfilled
    dispatch(ActionCreators.searchRelatedFulfilled(related_searches));
  } catch (err) {
    console.log('@@ err', err);
    // rejected
    dispatch(ActionCreators.searchRelatedRejected(err));
  }
};
