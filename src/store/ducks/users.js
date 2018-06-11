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
    default:
      return state;
  }
}

export const Actions = {
  addUserRequest: user => ({
    type: Types.ADD_USER_REQUEST,
    payload: {
      user,
    },
  }),
};
