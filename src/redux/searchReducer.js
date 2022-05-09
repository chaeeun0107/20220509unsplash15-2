const initialState = {
  photos: {
    status: '',
    list: [],
  },
  collections: {
    status: '',
    list: [],
  },
  users: {
    status: '',
    list: [],
  },
  related: [],
};

export const ActionTypes = {
  SEARCH_PHOTOS_PENDING: 'SEARCH_PHOTOS_PENDING',
  SEARCH_PHOTOS_FULFILLED: 'SEARCH_PHOTOS_FULFILLED',
  SEARCH_PHOTOS_REJECTED: 'SEARCH_PHOTOS_REJECTED',

  SEARCH_COLLECTIONS_PENDING: 'SEARCH_COLLECTIONS_PENDING',
  SEARCH_COLLECTIONS_FULFILLED: 'SEARCH_COLLECTIONS_FULFILLED',
  SEARCH_COLLECTIONS_REJECTED: 'SEARCH_COLLECTIONS_REJECTED',

  SEARCH_USERS_PENDING: 'SEARCH_USERS_PENDING',
  SEARCH_USERS_FULFILLED: 'SEARCH_USERS_FULFILLED',
  SEARCH_USERS_REJECTED: 'SEARCH_USERS_REJECTED',

  SEARCH_RELATED_PENDING: 'SEARCH_RELATED_PENDING',
  SEARCH_RELATED_FULFILLED: 'SEARCH_RELATED_FULFILLED',
  SEARCH_RELATED_REJECTED: 'SEARCH_RELATED_REJECTED',
};

export const ActionCreators = {

  // search
  searchPhotosPending: (payload) => ({
    type: ActionTypes.SEARCH_PHOTOS_PENDING,
    payload,
  }),
  searchPhotosFulfilled: (payload) => ({
    type: ActionTypes.SEARCH_PHOTOS_FULFILLED,
    payload,
  }),
  searchPhotosRejected: (payload) => ({
    type: ActionTypes.SEARCH_PHOTOS_REJECTED,
    payload,
  }),

  // collections
  searchCollectionsPending: (payload) => ({
    type: ActionTypes.SEARCH_COLLECTIONS_PENDING,
    payload,
  }),
  searchCollectionsFulfilled: (payload) => ({
    type: ActionTypes.SEARCH_COLLECTIONS_FULFILLED,
    payload,
  }),
  searchCollectionsRejected: (payload) => ({
    type: ActionTypes.SEARCH_COLLECTIONS_REJECTED,
    payload,
  }),

  // users
  searchUsersPending: (payload) => ({
    type: ActionTypes.SEARCH_USERS_PENDING,
    payload,
  }),
  searchUsersFulfilled: (payload) => ({
    type: ActionTypes.SEARCH_USERS_FULFILLED,
    payload,
  }),
  searchUsersRejected: (payload) => ({
    type: ActionTypes.SEARCH_USERS_REJECTED,
    payload,
  }),

  // searchRelated
  searchRelatedPending: (payload) => ({
    type: ActionTypes.SEARCH_RELATED_PENDING,
    payload,
  }),
  searchRelatedFulfilled: (payload) => ({
    type: ActionTypes.SEARCH_RELATED_FULFILLED,
    payload,
  }),
  searchRelatedRejected: (payload) => ({
    type: ActionTypes.SEARCH_RELATED_REJECTED,
    payload,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  // photos
  case ActionTypes.SEARCH_PHOTOS_PENDING: {
    return {
      ...state,
      photos: {
        ...state.photos,
        status: 'loading',
      },
    };
  }
  case ActionTypes.SEARCH_PHOTOS_FULFILLED: {
    return {
      ...state,
      photos: {
        ...state.photos,
        status: 'success',
        ...action.payload,
      },
    };
  }
  case ActionTypes.SEARCH_PHOTOS_REJECTED: {
    return {
      ...state,
      photos: {
        ...state.photos,
        status: 'error',
      },
    };
  }

  // collections
  case ActionTypes.SEARCH_COLLECTIONS_PENDING: {
    return {
      ...state,
      collections: {
        ...state.collections,
        status: 'loading',
      },
    };
  }
  case ActionTypes.SEARCH_COLLECTIONS_FULFILLED: {
    return {
      ...state,
      collections: {
        ...state.collections,
        status: 'success',
        ...action.payload,
      },
    };
  }
  case ActionTypes.SEARCH_COLLECTIONS_REJECTED: {
    return {
      ...state,
      collections: {
        ...state.collections,
        status: 'error',
      },
    };
  }

  // users
  case ActionTypes.SEARCH_USERS_PENDING: {
    return {
      ...state,
      users: {
        ...state.users,
        status: 'loading',
      },
    };
  }
  case ActionTypes.SEARCH_USERS_FULFILLED: {
    return {
      ...state,
      users: {
        ...state.users,
        status: 'success',
        ...action.payload,
      },
    };
  }
  case ActionTypes.SEARCH_USERS_REJECTED: {
    return {
      ...state,
      users: {
        ...state.users,
        status: 'error',
      },
    };
  }
  case ActionTypes.SEARCH_RELATED_FULFILLED: {
    return {
      ...state,
      related: action.payload,
    };
  }
  default:
    return state;
  }
};

export default reducer;
