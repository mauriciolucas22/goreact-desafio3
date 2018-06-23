export const Types = {
  ADD_USER_REQUEST: 'ADD_USER_REQUEST',
  ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'ADD_USER_FAILURE',
  REMOVE_USER: 'REMOVE_USER',
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
        error: null,
      };

    case Types.ADD_USER_SUCCESS:
      return {
        loading: false,
        error: null,
        modalVisible: false,
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

    case Types.REMOVE_USER:
      return {
        ...state,
        data: state.data.filter(user => user.id !== action.payload.id),
      };

    case Types.MODAL_VISIBLE:
      return { ...state, modalVisible: action.status };

    default:
      return state;
  }
}

/**
 * userInfo: { latitude, longitude, userName }
 */
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

  removeUser: id => ({
    type: Types.REMOVE_USER,
    payload: {
      id,
    },
  }),

  setModalVisible: status => ({
    type: Types.MODAL_VISIBLE,
    status,
  }),
};
