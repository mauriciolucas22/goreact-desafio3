import React from 'react';
import PropTypes from 'prop-types';

import { Container, Info } from './styles';

const UserInfo = ({ user }) => (
  <Container>
    <img src={user.avatar_url} alt="User" />
    <Info>
      <strong>{user.name}</strong>
      <strong>{user.login}</strong>
    </Info>
  </Container>
);

UserInfo.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    login: PropTypes.string,
    avatar_url: PropTypes.string,
  }).isRequired,
};

export default UserInfo;
