import {Text, Button, View} from 'react-native';
import React from 'react';
import style from '../Style';
import Onyx, {withOnyx} from 'react-native-onyx';
import ONYXKEYS from '../ONYXKEYS';

let renderCount = 0;
const originalVehicle = {
    numberOfPassengers: 0,
    milesDriven: 0,
};
Onyx.merge(ONYXKEYS.VEHICLE, originalVehicle);

const OnyxPropertySelectors = ({vehicle}) => {
    renderCount++;
    return (
        <View style={style.container}>
            <Text>Render count: {renderCount}</Text>
            <Text>Number of passengers: {vehicle.numberOfPassengers}</Text>
            <Text>Miles driven: {vehicle.milesDriven}</Text>
            <Button
                style={style.button}
                title="Add passenger"
                onPress={() => {
                    Onyx.merge(ONYXKEYS.VEHICLE, {numberOfPassengers: vehicle.numberOfPassengers + 1});
                }} />
            <Button
                style={style.button}
                title="Drive one mile"
                onPress={() => {
                    Onyx.merge(ONYXKEYS.VEHICLE, {milesDriven: vehicle.milesDriven + 1});
                }} />
            <Button
                style={style.button}
                title="Reset"
                onPress={() => {
                    Onyx.set(ONYXKEYS.VEHICLE, originalVehicle);
                }} />
        </View>
    );
};

export default withOnyx({
    vehicle: {
        key: ONYXKEYS.VEHICLE,
        // selector: obj => obj && ({milesDriven: obj.milesDriven}),
    },
})(OnyxPropertySelectors);
