import {Button, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import style from '../Style';
import {
  clearNumberFacts,
  startNumberFactService,
} from '../lib/NumberFactService';

const OnyxExamples = ({counter = 0}) => (
  <View style={style.container}>
    <TouchableOpacity style={style.button} onPress={startNumberFactService}>
      <Text>Fetch 🔢 facts!</Text>
    </TouchableOpacity>
    <TouchableOpacity style={style.button} onPress={clearNumberFacts}>
      <Text>Clear 🔢 facts</Text>
    </TouchableOpacity>
  </View>
);

export default OnyxExamples;
