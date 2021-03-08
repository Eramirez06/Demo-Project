import { StyleSheet } from 'react-native';
import { resize } from '../../utils/styles';
import { whiteColor } from '../../assets/colors';

const stles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: resize(20),
    height: resize(70, 'h'),
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: resize(20),
    fontSize: resize(18),
    color: whiteColor,
  },
  clear: {
    width: resize(50),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
export default stles;
