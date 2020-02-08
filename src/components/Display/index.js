import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

const Display = props => (
  <View style={styles.display}>
    <Text style={styles.displayValue} numberOfLines={1}>
      {props.value}
    </Text>
  </View>
);

export default Display;
