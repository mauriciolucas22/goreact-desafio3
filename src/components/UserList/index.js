import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions as UsersActions } from '../../store/ducks/users';

import UserInfo from './components/UserInfo';

import { Container } from './styles';

// { this.props.users.map(user => <UserInfo key={user.id} user={user} />) }

const UserList = ({ users }) => (
  <Container>
    <p>UserList</p>
  </Container>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const mapStateToProps = state => ({
  users: state.users.data,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
