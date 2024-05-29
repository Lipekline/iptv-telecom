import React from 'react';

import {Container, Title} from './styles';

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <Container>
      <Title>Tela Home</Title>
    </Container>
  );
};

export default Home;
