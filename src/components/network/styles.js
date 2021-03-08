import { StyleSheet } from 'react-native';
import { resize } from '../../utils/styles';
import { whiteColor } from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    zIndex: 2,
    width: '90%',
    height: resize(40, 'h'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: whiteColor,
    borderRadius: resize(5),
    bottom: resize(20, 'h'),
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: resize(14),
    fontWeight: '600',
  },
});
export default styles;
