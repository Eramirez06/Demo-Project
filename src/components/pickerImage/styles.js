import { StyleSheet } from 'react-native';
import { resize } from '../../utils/styles';

const styles = StyleSheet.create({
    container: {
        alignSelf:'center',
        marginVertical: resize(70, 'h'),
        width: resize(150),
        height: resize(150),
        borderRadius: resize(75),
        backgroundColor: 'grey',
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden'
    },
    loginIcon:{
        width: resize(150),
        height: resize(150)
    },
});
export default styles;
