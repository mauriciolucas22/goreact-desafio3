import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as UsersActions } from '../../../../store/ducks/users';

import { Container, Info, Icons } from './styles';

const UserInfo = ({ user, removeUser }) => (
  <Container>
    <img src={user.avatar_url} alt="User" />
    <Info>
      <strong>{user.name}</strong>
      <strong>{user.login}</strong>
    </Info>
    <Icons>
      <button className="fa fa-times-circle" onClick={() => removeUser(user.id)} />
      <i className="fa fa-angle-right" />
    </Icons>
  </Container>
);

UserInfo.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    login: PropTypes.string,
    avatar_url: PropTypes.string,
  }).isRequired,
  removeUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(null, mapDispatchToProps)(UserInfo);
