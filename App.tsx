import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabBar from './src/components/BottomTab';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
}

export default App;
