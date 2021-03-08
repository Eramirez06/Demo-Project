import React from 'react';
import { View, Image, Text, StatusBar, SafeAreaView } from 'react-native';
import styles from './styles';

//Libs
import { Container, Content } from 'native-base';

//Custom
import { blackColor } from '../../assets/colors';

const ContentScreen = ({ children }) => (
  <Container style={styles.container}>
    <StatusBar backgroundColor={blackColor} barStyle="light-content" />
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  </Container>
);
export default ContentScreen;
