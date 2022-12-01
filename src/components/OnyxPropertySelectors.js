import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import style from '../Style';
import Onyx, {withOnyx} from 'react-native-onyx';
import ONYXKEYS from '../ONYXKEYS';

let renderCount = 0;
const originalVehicle = {
    numberOfPassengers: 0,
    milesDriven: 0,
};
function insertData() {
    Onyx.merge(ONYXKEYS.VEHICLE, originalVehicle);
}

const OnyxPropertySelectors = ({vehicle = {}}) => {
    renderCount++;
    return (
        <View style={style.container}>
            <TouchableOpacity style={style.button} onPress={Onyx.clear}>
                <Text>Clear Onyx</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={insertData}>
                <Text>Insert Data</Text>
            </TouchableOpacity>
            <Text style={style.text}>Render count: {renderCount}</Text>
            <Text style={style.text}>
                Number of passengers: {vehicle.numberOfPassengers}
            </Text>
            <Text style={style.text}>Miles driven: {vehicle.milesDriven}</Text>
            <TouchableOpacity
                style={style.button}
                onPress={() => {
                    Onyx.merge(ONYXKEYS.VEHICLE, {
                        numberOfPassengers: vehicle.numberOfPassengers + 1,
                    });
                }}>
                <Text>Add passenger</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.button}
                onPress={() => {
                    Onyx.merge(ONYXKEYS.VEHICLE, {
                        milesDriven: vehicle.milesDriven + 1,
                    });
                }}>
                <Text>Drive one mile</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.button}
                onPress={() => {
                    Onyx.set(ONYXKEYS.VEHICLE, originalVehicle);
                }}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </View>
    );
};

export default withOnyx({
    vehicle: {
        key: ONYXKEYS.VEHICLE,
        // selector: obj => obj && {milesDriven: obj.milesDriven},
    },
})(OnyxPropertySelectors);
