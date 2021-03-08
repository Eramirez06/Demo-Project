import React, { Component, useRef, useEffect } from 'react';
import { View, Image, Text, Animated } from 'react-native';
import styles from './styles';

const Network = ({ isConnected }) => {
  
  const appear = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const translate = !isConnected ? 1 : 0;
    Animated.timing(appear, {
      toValue: translate,
      duration: 500,
    }).start();
  }, [isConnected, appear]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: appear.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        },
      ]}>
      <Text style={styles.title}>No internet connection</Text>
    </Animated.View>
  );
};
export default Network;
