import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from './routes';

const App = () => {
  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
  }
  changeScreenOrientation();

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
