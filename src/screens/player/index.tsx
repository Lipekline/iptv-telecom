import React, {useState} from 'react';

import {Container, Title} from './styles';
import Video from 'react-native-video';

interface IPlayerProps {}

const Player: React.FC<IPlayerProps> = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);
  return (
    <Container>
      <Title>Tela de Player</Title>
      <Video
        // Can be a URL or a local file.
        source={{uri: 'http://168.232.56.70:8000'}}
        style={{width: '100%', height: 200}}
        audioOutput="earpiece"
      />
    </Container>
  );
};

export default Player;
