import { StyleSheet } from 'react-native';
import { blackColor } from '../../../assets/colors';
import { resize } from '../../../utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blackColor,
  },
  content: {
    marginTop: resize(35, 'h'),
  },
  rowK: {
    paddingHorizontal: resize(10),
  },
});
export default styles;
