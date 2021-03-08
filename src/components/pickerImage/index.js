import React, { useState } from 'react';
import { View, Alert, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

//Images
import login from '../../assets/images/login.png';
import { asyncGetPicture, asyncTakePicture } from '../../utils/upload_asset';

const PickerImage = ({ picture, onPress }) => {

    const selectPictureMethod = () => {
        Alert.alert(
            "Upload new picture",
            "Would you like to",
            [
                {
                    text: "Take a picture",
                    onPress: () => handleResponse(false),
                },
                { 
                    text: "Open gallery",
                    onPress: () => handleResponse(true)
                }
            ]
          );
    };

    const handleResponse = async (isGallery = false) => {
        const response = isGallery ? await asyncGetPicture() : await asyncTakePicture();
        onPress(response.uri);
    }

    return ( 
        <TouchableOpacity onPress={selectPictureMethod} activeOpacity={0.7} style={styles.container}>
            <Image style={picture ? styles.loginIcon : {}} resizeMode={picture ? 'stretch' : 'contain'} source={picture ? { uri: picture } : login} />
        </TouchableOpacity>
    );
};

PickerImage.defaultProps = {
    picture: null,
    onPress: () => {},
};

PickerImage.propTypes = {
    picture: PropTypes.string,
    onPress: PropTypes.func,
};

export default PickerImage;
