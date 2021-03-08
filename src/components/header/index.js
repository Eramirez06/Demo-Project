import React from 'react';
import { View, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';

//Icons
import SearchIcon from '../icons/searchIcon';
import CloseSession from '../icons/closeSession';
import CloseIcon from '../icons/closeIcon';
import { whiteColor } from '../../assets/colors';

const Header = ({ isSearching, onChangeText, onRequestClose, filterBy }) => {

  const displayCloseSession = () => {
    Alert.alert(
      "Close session",
      "Are you sure you want to out of your session",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => logOut() }
      ],
      { cancelable: false }
    );
  }

  const logOut = () => {
    auth().signOut();
  }

  return (
    <View style={styles.container}>
      <SearchIcon />
      <TextInput
        value={filterBy}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={whiteColor}
      />
      {isSearching ? (
        <TouchableOpacity onPress={onRequestClose} style={styles.clear}>
          <CloseIcon />
        </TouchableOpacity>
      ) : null}
      <TouchableOpacity onPress={displayCloseSession} style={styles.clear}>
        <CloseSession />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
