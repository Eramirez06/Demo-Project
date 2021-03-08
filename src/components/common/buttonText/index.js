import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ButtonText = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={styles.container}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
);

ButtonText.defaultProps = {
    title: '',
    onPress: () => {},
};

ButtonText.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
};

export default ButtonText;
