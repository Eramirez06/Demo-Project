import { StyleSheet } from 'react-native';
import { whiteColor } from '../../../assets/colors';
import { resize } from '../../../utils/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: resize(20)
    },
    input: {
        borderBottomColor: whiteColor,
        borderWidth: 1,
        height: resize(40, 'h'),
        color: whiteColor
    },
    titleStyle: {
        color: whiteColor,
        fontSize: resize(15),
        fontWeight: 'bold'
    }
});
export default styles;
