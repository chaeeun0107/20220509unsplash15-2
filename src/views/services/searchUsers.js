import { ActionCreators } from '../../redux/searchReducer';
import API from '../../api';

export const searchUsers = (params) => async (dispatch) => {
  dispatch(ActionCreators.searchUsersPending());
  try {
    const data = await API.searchUsers(params);
    dispatch(ActionCreators.searchUsersFulfilled(data));
    console.log('@@ data ', data);
  } catch (err) {
    console.log('@@ err ', err);
    dispatch(ActionCreators.searchUsersRejected(err));
  }
};
