import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions as UsersActions } from '../../store/ducks/users';

import { Container, UserInfo, Empty } from './styles';

// { users.data && users.data.map(user => <UserInfo user={user} />) }
const UserList = ({ users, removeUser }) => (
  <Container>
    {!users.data.length && <Empty><strong>Adicione usuários!</strong></Empty>}
    {users.data.map(user => (
      <UserInfo key={user.id}>
        <li>
          <img src={user.avatar_url} alt={user.name} />
          <div>
            <strong>{user.name}</strong>
            <small>{user.login}</small>
          </div>
          <button onClick={() => removeUser(user.id)}>
            <i className="fa fa-times-circle" />
          </button>
          <i className="fa fa-angle-right" />
        </li>
      </UserInfo>
    ))}
  </Container>
);

UserList.propTypes = {
  users: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    })),
  }).isRequired,
  removeUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
