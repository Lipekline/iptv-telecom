import React from 'react';

import {
  Container,
  ContainerBody,
  Header,
  ImageOnboarding,
  Subheader,
} from './styles';
import {Spacer} from '../../components/atoms/Spacer';
import Botao from '../../components/atoms/Botao';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../styles/colors';

interface IOnboardingProps {}

const Onboarding: React.FC<IOnboardingProps> = () => {
  const {navigate} = useNavigation();
  return (
    <>
      <Container>
        <ImageOnboarding
          source={require('../../assets/images/image-onboarding.jpg')}
        />
      </Container>
      <ContainerBody>
        <Spacer vertical={24} />
        <Header>Tela de onboarding</Header>
        <Header>-- Ignore a imagem acima--</Header>
        <Spacer vertical={24} />
        <Subheader>Insira aqui um subtitulo maneiro </Subheader>
        <Spacer vertical={48} />
        <Botao
          color={Colors.primary}
          textColor="#fff"
          text="Próximo"
          onPress={() => navigate('Home' as never)}
        />
      </ContainerBody>
    </>
  );
};

export default Onboarding;
