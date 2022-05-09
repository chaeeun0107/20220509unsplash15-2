import { ActionCreators } from '../../redux/topicsReducer';
import { axiosInstance } from '../../lib/axios';

export const fetchTopics = () => async (dispatch) => {
  dispatch(ActionCreators.getTopicsPending());
  try {
    const { data } = await axiosInstance({
      url: '/topics',
      method: 'get',
      params: {
        page: 1,
        per_page: 30,
      },
    });

    dispatch(ActionCreators.getTopicsFulfilled(data));
  } catch (err) {
    dispatch(ActionCreators.getTopicsRejected(err));
  }
};
