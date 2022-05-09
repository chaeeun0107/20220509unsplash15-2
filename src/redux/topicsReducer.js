const initialState = {
  status: '',
  list: [],
};

export const ActionTypes = {
  GET_TOPICS_PENDING: 'GET_TOPICS_PENDING',
  GET_TOPICS_FULFILLED: 'GET_TOPICS_FULFILLED',
  GET_TOPICS_REJECTED: 'GET_TOPICS_REJECTED',
};

export const ActionCreators = {
  // topics
  getTopicsPending: (payload) => ({
    type: ActionTypes.GET_TOPICS_PENDING,
    payload,
  }),
  getTopicsFulfilled: (payload) => ({
    type: ActionTypes.GET_TOPICS_FULFILLED,
    payload,
  }),
  getTopicsRejected: (payload) => ({
    type: ActionTypes.GET_TOPICS_REJECTED,
    payload,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case ActionTypes.GET_TOPICS_PENDING: {
    return {
      ...state,
      status: 'loading',
    };
  }
  case ActionTypes.GET_TOPICS_FULFILLED: {
    return {
      ...state,
      status: 'success',
      list: action.payload,
    };
  }
  case ActionTypes.GET_TOPICS_REJECTED: {
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
