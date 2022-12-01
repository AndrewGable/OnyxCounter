import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import style from '../Style';
import Onyx, {withOnyx} from 'react-native-onyx';
import ONYXKEYS from '../ONYXKEYS';

const OnyxCounter = ({counter = 0}) => (
  <View style={style.container}>
    <Text style={style.text}>Onyx count: {counter}</Text>
    <TouchableOpacity
      style={style.button}
      onPress={() => {
        Onyx.merge(ONYXKEYS.COUNTER, counter + 1);
      }}>
      <Text>Add One!</Text>
    </TouchableOpacity>
  </View>
);

export default withOnyx({
  counter: {
    key: ONYXKEYS.COUNTER,
  },
})(OnyxCounter);
