import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  `;

export const Imagem = styled.ImageBackground`
  height: 100%;
  width: 100%;
  
`;

export const Botao = styled.Pressable`
  border: 1px solid #e4e3e1;
  border-radius: 16px;
  height: 150px;
  width: 160px;
  margin-right: 20px;
  margin-bottom: 20px;
  overflow: hidden;
`;
