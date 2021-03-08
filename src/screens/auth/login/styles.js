import { StyleSheet } from 'react-native';
import { blackColor, whiteColor } from '../../../assets/colors'
import { resize } from '../../../utils/styles';

const styles = StyleSheet.create({
    principal: {
        backgroundColor: blackColor
    },
    content: {
        paddingHorizontal: resize(20),
    },
    loginIcon:{
        alignSelf:'center',
        marginVertical: resize(70, 'h')
    },
    buttonTop:{
        marginTop: resize(50, 'h')
    }
})
export default styles;