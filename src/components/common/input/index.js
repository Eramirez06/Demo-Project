import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Input = ({ title, value, onChangeText, placeholder, secureTextEntry, placeholderTextColor }) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <TextInput
                onChangeText={onChangeText}
                value={value}
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={placeholderTextColor}
            />
        </View>
    )
};

Input.defaultProps = {
    title: '',
    value: '',
    placeholder: '',
    secureTextEntry: false,
    placeholderTextColor: 'grey',
};

Input.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
    secureTextEntry: PropTypes.bool,
    placeholderTextColor: PropTypes.string,
};

export default Input;