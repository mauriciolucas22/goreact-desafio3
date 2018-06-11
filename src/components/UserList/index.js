import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions as UsersActions } from '../../store/ducks/users';

import UserInfo from './components/UserInfo';

import { Container } from './styles';

const users = [
  {
    login: 'mauriciolucas22',
    id: 20993303,
    avatar_url: 'https://avatars0.githubusercontent.com/u/20993303?v=4',
    name: 'Mauricio Lucas',
  },
  {
    login: 'diego3g',
    id: 2254731,
    avatar_url: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
    name: 'Diego Fernandes',
  },
];

const UserList = () => (
  <Container>
    <p>UserList</p>
    { users.map(user => <UserInfo user={user} />) }
  </Container>
);

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
