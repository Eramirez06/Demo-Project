import React, { useState } from 'react';
import { Keyboard, TouchableOpacity, StatusBar } from 'react-native';
import { Content } from 'native-base';
import auth from '@react-native-firebase/auth';
import styles from './styles';

//Icons
import CloseIcon from '../../../components/icons/backIcon';

//Components
import Input from '../../../components/common/input';
import Button from '../../../components/common/button';
import PickerImage from '../../../components/pickerImage';

import { firebaseValidations, validateEmail, validatePassword } from '../../../utils/validations';
import showMessage from '../../../utils/showAlert';
import uploadAsset from '../../../utils/upload_asset';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [picture, setPicture] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const createAccount = async () => {
        try {
			let emailValidation = validateEmail(email)
			if (!email) throw 'Email is required';
			if (emailValidation) throw 'Email not valid';
			if (!password) throw 'Password is required';
			let passwordValidation = validatePassword(password)
			if (passwordValidation) throw 'Password invalid';
			if (!picture) throw 'Picture is required';
            Keyboard.dismiss();
            setLoading(true);
            await auth().createUserWithEmailAndPassword(email, password);
            let userId = auth().currentUser.uid;
            await uploadAsset(`userPictures/${userId}`, picture);
        } catch (error) {
            setLoading(false);
            if(error.code) {
                let message = firebaseValidations(error);
                showMessage(message, 3000);
            } else{
                showMessage(error);
            }
        }
    }

    return(
        <>
            <StatusBar backgroundColor='black' barStyle='light-content' />
            <Content contentContainerStyle={styles.content} style={styles.principal}>
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            style={styles.image}>
                <CloseIcon />
            </TouchableOpacity>
                <PickerImage onPress={setPicture} picture={picture} />
                <Input
                    value={email}
                    onChangeText={setEmail}
                    placeholder='test@gmail.com'
                    title='Email'
                />
                <Input
                    value={password}
                    onChangeText={setPassword}
                    placeholder='123456'
                    title='Password'
                    secureTextEntry
                />
                <Button loading={isLoading} onPress={createAccount} customStyle={styles.buttonTop} text='Register' />
            </Content>
        </>
    )
}
export default Login;
