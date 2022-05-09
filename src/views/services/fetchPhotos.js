import { ActionCreators } from '../../redux/photosReducer';
import { axiosInstance } from '../../lib/axios';

export const fetchPhotos = (params) => async (dispatch, getState) => {
  dispatch(ActionCreators.getPhotosPending());
  try {
    const { data } = await axiosInstance({
      url: '/photos',
      method: 'get',
      params,
    });
    dispatch(ActionCreators.getPhotosFulfilled(data));
  } catch (err) {
    dispatch(ActionCreators.getPhotosRejected(err));
  }
};
