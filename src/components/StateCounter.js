import {Button, Text, View} from 'react-native';
import React from 'react';
import style from '../Style';

class StateCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>State count: {this.state.count}</Text>
        <Button
          title={'Add one!'}
          onPress={() => {
            this.setState({count: this.state.count + 1});
          }}
        />
      </View>
    );
  }
}

export default StateCounter;
