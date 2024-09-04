import React from 'react';

import {Botao, Container, Imagem} from './styles';

import ImagePluto from '../../../assets/images/pluto_tv.jpg';
import ImageGlobo from '../../../assets/images/globo.jpg';
import ImageRecord from '../../../assets/images/record.jpg';

interface ICardCapaProps {
  onPress?: () => void;
}

const CardCapa: React.FC<ICardCapaProps> = ({onPress}) => {
  return (
    <Container>
      <Botao onPress={onPress}>
        <Imagem source={ImagePluto} />
      </Botao>
      <Botao onPress={onPress}>
        <Imagem source={ImageGlobo} />
      </Botao>
      <Botao onPress={onPress}>
        <Imagem source={ImageRecord} />
      </Botao>
    </Container>
  );
};

export default CardCapa;
