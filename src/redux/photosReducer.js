const initialState = {
  status: '',
  list: [],
};

export const ActionTypes = {
  GET_PHOTOS_PENDING: 'GET_PHOTOS_PENDING',
  GET_PHOTOS_FULFILLED: 'GET_PHOTOS_FULFILLED',
  GET_PHOTOS_REJECTED: 'GET_PHOTOS_REJECTED',
};

export const ActionCreators = {
  // photos
  getPhotosPending: (payload) => ({
    type: ActionTypes.GET_PHOTOS_PENDING,
    payload,
  }),
  getPhotosFulfilled: (payload) => ({
    type: ActionTypes.GET_PHOTOS_FULFILLED,
    payload,
  }),
  getPhotosRejected: (payload) => ({
    type: ActionTypes.GET_PHOTOS_REJECTED,
    payload,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case ActionTypes.GET_PHOTOS_PENDING: {
    return {
      ...state,
      status: 'loading',
    };
  }
  case ActionTypes.GET_PHOTOS_FULFILLED: {
    return {
      ...state,
      status: 'success',
      list: [
        ...state.list,
        ...action.payload,
      ],
    };
  }
  case ActionTypes.GET_PHOTOS_REJECTED: {
    return {
      ...state,
      status: 'error',
    };
  }
  default:
    return state;
  }
};

export default reducer;
