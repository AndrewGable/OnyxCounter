import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import style from '../Style';
import {
    clearNumberFacts,
    mergeCatAndDogFacts,
    startNumberFactService,
} from '../lib/FactService';

const OnyxExamples = ({counter = 0}) => (
    <View>
        <TouchableOpacity style={style.button} onPress={startNumberFactService}>
            <Text>Fetch 🔢 facts!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={clearNumberFacts}>
            <Text>Clear 🔢 facts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={mergeCatAndDogFacts}>
            <Text>Merge 🐱 and 🐶 facts</Text>
        </TouchableOpacity>
    </View>
);

export default OnyxExamples;
