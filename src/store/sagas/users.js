import { call, put, select } from 'redux-saga/effects';
// api
import { Actions as UserActions } from '../ducks/users';

export function* addUser(action) {
  try {
    console.tron.log(action);

    yield put(UserActions.addUserRequest({}));
  } catch (err) {
    console.tron.warn('Error in add user');
  }
}
