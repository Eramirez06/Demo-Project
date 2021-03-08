import { StyleSheet } from 'react-native';

//custom
import { resize } from '../../../utils/styles';

export default StyleSheet.create({
  container: {
    height: resize(450, 'h'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: resize(16),
    fontWeight: '400',
  },
  loading: {
    height: resize(450, 'h'),
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
