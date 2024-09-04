import styled from 'styled-components/native';
import { Colors } from '../../styles/colors';

export const Container = styled.View`
  padding: 30px 20px;
  background-color: ${Colors.white};
  flex: 1;
  width: 100%;
  flex-wrap: wrap;
`;

export const Title = styled.Text`
  color: ${Colors.secondary};
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;
