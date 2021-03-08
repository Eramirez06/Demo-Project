import { StyleSheet } from 'react-native';
import { whiteColor } from '../../../assets/colors';
import { resize } from '../../../utils/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: resize(15),
        marginTop: resize(10),
    },
    text:{
        color: whiteColor,
        textAlign:'center',
        fontSize: resize(14)
    }
});
export default styles;
