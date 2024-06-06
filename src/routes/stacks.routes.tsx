import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../screens/onboarding';
import Home from '../screens/home';
import Player from '../screens/player';

export type StackList = {
  Onboarding: undefined;
  Home: undefined;
  Player: undefined;
  Detalhes: {id: number};
};

const {Navigator, Screen} = createStackNavigator<StackList>();

const StackRoutes: React.FC = () => {
  return (
    <Navigator>
      <Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Screen name="Home" component={Home} options={{headerShown: false}} />
      <Screen
        name="Player"
        component={Player}
        // options={{headerShown: false}}
      />
    </Navigator>
  );
};

export default StackRoutes;
