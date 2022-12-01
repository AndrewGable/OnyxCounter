import {Button, Text, View} from 'react-native';
import React from 'react';
import style from '../Style';
import Onyx, {withOnyx} from 'react-native-onyx';
import ONYXKEYS from '../ONYXKEYS';

const OnyxCounter = ({counter = 0}) => (
  <View style={style.container}>
    <Text style={style.text}>Onyx count: {counter}</Text>
    <Button
      title={'Add one!'}
      onPress={() => {
        Onyx.merge(ONYXKEYS.COUNTER, counter + 1);
      }}
    />
  </View>
);

export default withOnyx({
  counter: {
    key: ONYXKEYS.COUNTER,
  },
})(OnyxCounter);
