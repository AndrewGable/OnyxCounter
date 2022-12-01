import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import _ from 'underscore';
import style from '../Style';
import Onyx, {withOnyx} from 'react-native-onyx';
import ONYXKEYS from '../ONYXKEYS';

const originalOwners = {
    owners_1: {id: 1, name: 'Tim'},
    owners_2: {id: 2, name: null},
};
function insertData() {
    Onyx.mergeCollection(ONYXKEYS.COLLECTION.OWNERS, originalOwners);
}

// Onyx.connect({
//     key: ONYXKEYS.COLLECTION.OWNERS,
//     callback: (owner) => {
//         if (owner && !owner.name) {
//             Onyx.merge(`${ONYXKEYS.COLLECTION.OWNERS}${owner.id}`, {name: 'Andrew'});
//         }
//     }
// });

const OnyxTriggeringActions = ({owners = {}}) => {
    return (
        <View style={style.container}>
            <Text style={style.h3}>Triggering Actions with Onyx.connect()</Text>
            <TouchableOpacity style={style.button} onPress={Onyx.clear}>
                <Text>Clear Onyx</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={insertData}>
                <Text>Insert Data</Text>
            </TouchableOpacity>
            {_.map(owners, owner => {
                if (!owner) return null;
                return (
                    <View key={owner.id}>
                        <Text>- {owner.name || 'unknown'}</Text>
                    </View>
                );
            })}
        </View>
    );
};

export default withOnyx({
    owners: {
        key: ONYXKEYS.COLLECTION.OWNERS,
    },
})(OnyxTriggeringActions);
