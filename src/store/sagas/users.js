import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';
import { Actions as UserActions } from '../ducks/users';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.userInfo.userName}`);

    const isDuplicated =
    yield select(state => state.users.data.find(user => user.id === data.id));

    if (isDuplicated) {
      yield put(UserActions.addUserFailure('usuario duplicado'));
    } else {
      const userResponse = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar_url: data.avatar_url,
        coordinates: {
          latitude: action.payload.userInfo.latitude,
          longitude: action.payload.userInfo.longitude,
        },
      };

      yield put(UserActions.addUserSuccess(userResponse));
    }
  } catch (err) {
    yield put(UserActions.addUserFailure('Erro ao add user'));
  }
}
