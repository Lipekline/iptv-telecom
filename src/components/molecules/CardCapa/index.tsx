import React from 'react';

import {Botao, Container, Imagem} from './styles';

import ImagePluto from '../../../assets/images/pluto_tv.jpg';
import ImageGlobo from '../../../assets/images/globo.jpg';
import ImageRecord from '../../../assets/images/record.jpg';
import {useNavigation} from '@react-navigation/native';

interface ICardCapaProps {}

const CardCapa: React.FC<ICardCapaProps> = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Botao
        onPress={() =>
          navigate('Player', {
            link: 'http://172.16.101.14:8000',
          })
        }>
        <Imagem source={ImagePluto} />
      </Botao>
      <Botao
        onPress={() =>
          navigate('Player', {
            link: 'http://172.16.101.22:8000',
          })
        }>
        <Imagem source={ImageGlobo} />
      </Botao>
      <Botao
        onPress={() =>
          navigate('Player', {
            link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          })
        }>
        <Imagem source={ImageRecord} />
      </Botao>
    </Container>
  );
};

export default CardCapa;
