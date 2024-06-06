import React from 'react';

import {Container, Title} from './styles';
import {Spacer} from '../../components/atoms/Spacer';
import CardCapa from '../../components/molecules/CardCapa';
import {useNavigation} from '@react-navigation/native';

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Title>Tela Home</Title>
      <Spacer vertical={50} />
      <CardCapa onPress={() => navigate('Player' as never)} />
    </Container>
  );
};

export default Home;
