import React, { useState } from 'react';
import { Image, StatusBar } from 'react-native';
import { Content } from 'native-base';
import auth from '@react-native-firebase/auth';
import styles from './styles';

//Images
import login from '../../../assets/images/login.png';

//Components
import Input from '../../../components/common/input';
import Button from '../../../components/common/button';
import ButtonText from '../../../components/common/buttonText';
import { firebaseValidations } from '../../../utils/validations';
import showMessage from '../../../utils/showAlert';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const loginUser = async () => {
        try {
            if (!email) throw 'Email is required';
            if (!password) throw 'Password is required';
            setLoading(true);
            await auth().signInWithEmailAndPassword(email, password);
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
                <Image style={styles.loginIcon} resizeMode='contain' source={login} />
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
                <Button onPress={loginUser} loading={loading} customStyle={styles.buttonTop} text='Log In' />
                <ButtonText onPress={() => navigation.navigate('Register')} title={`You don't have account? Press here to register`}/>
            </Content>
        </>
    )
}
export default Login;
