import { StyleSheet } from 'react-native';

//Custom
import { resize } from '../../utils/styles';
import { whiteColor } from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: resize(50, 'h'),

    justifyContent: 'center',
  },
  innerDisplay: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  separator: {
    width: '40%',
    backgroundColor: whiteColor,
    height: resize(3),
  },
  row: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: whiteColor,
  },
});
export default styles;
