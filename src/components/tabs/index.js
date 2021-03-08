import React, { useEffect, useState, useRef } from 'react';
import { View, TouchableOpacity, Text, Animated } from 'react-native';
import styles from './styles';
import { resize } from '../../utils/styles';

const Tabs = ({ onPress }) => {
  const [isAnime, setAnime] = useState(true);
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const translate = isAnime ? 0 : 1;
    Animated.timing(translateX, {
      toValue: translate,
      duration: 500,
    }).start();
  }, [isAnime, translateX]);

  const onActiveTabChange = (active) => {
    onPress(active);
    setAnime(active);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerDisplay}>
        <TouchableOpacity
          onPress={() => onActiveTabChange(true)}
          style={styles.row}>
          <Text style={styles.title}>Anime</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onActiveTabChange(false)}
          style={styles.row}>
          <Text style={styles.title}>Manga</Text>
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[
          styles.separator,
          {
            left: translateX.interpolate({
              inputRange: [0, 1],
              outputRange: ['5%', '55%'],
            }),
          },
        ]}
      />
    </View>
  );
};
export default Tabs;
