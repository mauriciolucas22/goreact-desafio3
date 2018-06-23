export const Types = {
  ADD_USER_REQUEST: 'ADD_USER_REQUEST',
  ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'ADD_USER_FAILURE',
  REMOVE_USER: 'REMOVE_USER',
};

const INITIAL_STATE = {
  data: [],
  message: {
    error: null,
    text: '',
  },
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER_SUCCESS:
      return {
        data: [
          ...state.data,
          { ...action.payload.data },
        ],
        message: {
          ...state.message,
          text: 'Usuário adicionado com sucesso!',
          error: false,
        },
      };

    case Types.ADD_USER_FAILURE:
      return {
        ...state,
        message: {
          ...state.message,
          text: 'Usuário não existe!',
          error: true,
        },
      };

    case Types.REMOVE_USER:
      return {
        ...state,
        data: state.data.filter(user => user.id !== action.payload.id),
        message: {
          ...state.message,
          text: 'Usuário removido',
          error: false,
        },
      };

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
};
