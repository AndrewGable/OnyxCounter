import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import style from './src/Style';
import React from 'react';

import Onyx from 'react-native-onyx';
import ONYXKEYS from './src/ONYXKEYS';

import StateCounter from './src/components/StateCounter';
import OnyxCounter from './src/components/OnyxCounter';
import OnyxExamples from './src/components/OnyxExamples';
import OnyxPropertySelectors from './src/components/OnyxPropertySelectors';
import OnyxRelationships from './src/components/OnyxRelationships';
import OnyxTriggeringActions from './src/components/OnyxTriggeringActions';

Onyx.init({
    keys: ONYXKEYS,
});

const App = () => {
    return (
        <View>
            <SafeAreaView />
            <ScrollView contentContainerStyle={style.scroll}>
                <Text style={style.h3}>State vs. Onyx</Text>
                <StateCounter />
                <OnyxCounter />
                <View style={style.hr} />
                <OnyxExamples />
                <View style={style.hr} />
                <OnyxPropertySelectors />
                <View style={style.hr} />
                <OnyxRelationships />
                <View style={style.hr} />
                <OnyxTriggeringActions />
            </ScrollView>
        </View>
    );
};

export default App;
