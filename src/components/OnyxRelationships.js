import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import _ from 'underscore';
import style from '../Style';
import Onyx, {withOnyx} from 'react-native-onyx';
import ONYXKEYS from '../ONYXKEYS';

const owners = {
    owners_1: {id: 1, name: 'Tim'},
    owners_2: {id: 2, name: 'Andrew'},
};
const pets = {
    pets_1: {id: 1, name: 'Fluffy', type: 'cat', ownerID: 1},
    pets_2: {id: 2, name: 'Snowball', type: 'cat', ownerID: 1},
    pets_3: {id: 3, name: 'Fido', type: 'dog', ownerID: 2},
    pets_4: {id: 4, name: 'Petey', type: 'bird', ownerID: 2},
};
function insertData() {
    Onyx.mergeCollection(ONYXKEYS.COLLECTION.OWNERS, owners);
    Onyx.mergeCollection(ONYXKEYS.COLLECTION.PETS, pets);
}

const OnyxRelationships = ({owners = {}, pets = {}}) => {
    return (
        <View style={style.container}>
            <Text style={style.h3}>Collections with Relationships</Text>
            <TouchableOpacity style={style.button} onPress={Onyx.clear}>
                <Text>Clear Onyx</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={insertData}>
                <Text>Insert Initial Data</Text>
            </TouchableOpacity>
            {_.map(_.compact(pets), pet => {
                const owner = {};
                return (
                    <View key={pet.id}>
                        <Text>
                            {pet.name} is a {pet.type} owned by{' '}
                            {owner.name || 'unknown'}
                        </Text>
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
    pets: {
        key: ONYXKEYS.COLLECTION.PETS,
    },
})(OnyxRelationships);

// const owner = owners[`${ONYXKEYS.COLLECTION.OWNERS}${pet.ownerID}`] || {};

// Onyx.connect({
//     key: ONYXKEYS.COLLECTION.OWNERS,
//     // waitForCollectionCallback: true,
//     callback: console.log,
// });
