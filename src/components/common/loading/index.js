import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

//custom
import styles from './styles';
import { whiteColor } from '../../../assets/colors';

const EmptyState = ({ containerStyle, textStyle, lines, text, color }) => (
  <View style={containerStyle}>
    <Text style={[textStyle, { color }]} numberOfLines={lines}>
      {text}
    </Text>
  </View>
);

export const Loading = ({ color = whiteColor }) => (
  <View style={styles.loading}>
    <ActivityIndicator size="large" color={color} />
  </View>
);

EmptyState.defaultProps = {
  containerStyle: styles.container,
  textStyle: styles.text,
  lines: 1,
  text: '',
  color: whiteColor,
};
export default EmptyState;
