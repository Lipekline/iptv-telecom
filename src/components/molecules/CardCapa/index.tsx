import React from 'react';

import {Container} from './styles';
import {Pressable} from 'react-native';

interface ICardCapaProps {
  onPress?: () => void;
}

const CardCapa: React.FC<ICardCapaProps> = ({onPress}) => {
  return <Container onPress={onPress} />;
};

export default CardCapa;
