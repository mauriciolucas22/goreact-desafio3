export const Types = {
  ADD_USER_REQUEST: 'ADD_USER_REQUEST',
  ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'ADD_USER_FAILURE',
};

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: [],
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case Types.ADD_USER_SUCCESS:
      return {
        loading: false,
        error: null,
        data: [
          ...state.data,
          { ...action.payload.data },
        ],
      };

    case Types.ADD_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}

export const Actions = {
  addUserRequest: userInfo => ({
    type: Types.ADD_USER_REQUEST,
    payload: {
      userInfo,
    },
  }),

  addUserSuccess: data => ({
    type: Types.ADD_USER_SUCCESS,
    payload: {
      data,
    },
  }),

  addUserFailure: error => ({
    type: Types.ADD_USER_FAILURE,
    payload: {
      error,
    },
  }),
};
