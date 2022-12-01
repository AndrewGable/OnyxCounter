import {Text, Button, View} from 'react-native';
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
Onyx.mergeCollection(ONYXKEYS.COLLECTION.OWNERS, owners);
Onyx.mergeCollection(ONYXKEYS.COLLECTION.PETS, pets);

const OnyxRelationships = ({owners = {}, pets = {}}) => {
    return (
        <View style={style.container}>
            <Button title="Clear Onyx" onPress={Onyx.clear} />
            {_.map(_.compact(pets), (pet) => {
                const owner = {};
                return (
                    <View key={pet.id}>
                        <Text>{pet.name} is a {pet.type} owned by {owner.name || 'unknown'}</Text>
                    </View>
                );
            })}
        </View>
    )
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
//     waitForCollectionCallback: true,
//     callback: console.log
// });
