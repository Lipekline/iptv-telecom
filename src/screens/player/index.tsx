import React, {useState} from 'react';

import {Container, Title} from './styles';
import Video from 'react-native-video';
import {RouteProp, useRoute} from '@react-navigation/native';
// import Imagem from '../../assets/images/pluto_tv.jpg';

interface IPlayerProps {}

const Player: React.FC<IPlayerProps> = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  type ParametrosTela = {
    Player: {
      link: string;
    };
  };

  const route = useRoute<RouteProp<ParametrosTela, 'Player'>>();
  const {link} = route.params;

  return (
    <Container>
      <Title>Tela de Player</Title>
      <Video
        // Can be a URL or a local file.
        source={{uri: link}}
        style={{width: '100%', height: 200}}
        audioOutput="earpiece"
        controls={true}
      />
    </Container>
  );
};

export default Player;
