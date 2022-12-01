import {View} from 'react-native';
import style from './src/Style';
import React from 'react';
import type {Node} from 'react';
import StateCounter from './src/components/StateCounter';
import OnyxCounter from './src/components/OnyxCounter';
import Onyx from 'react-native-onyx';
import ONYXKEYS from './src/ONYXKEYS';

Onyx.init({
  keys: ONYXKEYS,
});

const App: () => Node = () => {
  return (
    <View style={style.container}>
      <StateCounter />
      <OnyxCounter />
    </View>
  );
};

export default App;
