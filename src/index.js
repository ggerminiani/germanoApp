import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';

import Routes from './routes';

const App = () => {
  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP,
    );
  }
  changeScreenOrientation();

  return (
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
  )
};

export default App;
