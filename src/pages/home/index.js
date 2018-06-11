import React from 'react';

import Map from './components/Map';
import UserList from '../../components/UserList';

import { Container } from './styles';

const Home = () => (
  <Container>
    <Map />
    <UserList />
  </Container>
);

export default Home;
