import { StyleSheet } from 'react-native';
import { resize } from '../../../utils/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        marginTop: resize(35, 'h'),
    },
});
export default styles;
