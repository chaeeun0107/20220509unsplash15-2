import { ActionCreators } from '../../redux/searchReducer';
import API from '../../api';

export const searchPhotos = (params) => async (dispatch) => {
  dispatch(ActionCreators.searchPhotosPending());
  try {
    const data = await API.searchPhotos(params);
    dispatch(ActionCreators.searchPhotosFulfilled(data));
  } catch (err) {
    dispatch(ActionCreators.searchPhotosRejected(err));
  }
};
