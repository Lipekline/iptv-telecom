import styled from 'styled-components/native';
import { Colors } from '../../styles/colors';

export const Container = styled.View`
  padding: 0px 20px;
  background-color: ${Colors.white};
  flex: 1;
`;

export const Title = styled.Text`
  color: ${Colors.secondary};
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;
