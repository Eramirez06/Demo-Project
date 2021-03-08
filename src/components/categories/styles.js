import { StyleSheet } from 'react-native';
import { whiteColor } from '../../assets/colors';

//Custom
import { resize } from '../../utils/styles';

const styles = StyleSheet.create({
  container: {
    paddingLeft: resize(15),
  },
  title: {
    color: whiteColor,
    marginLeft: resize(15),
  },
  containerCard: {
    width: resize(120),
    height: resize(140, 'h'),
    marginVertical: resize(10, 'h'),
    marginRight: resize(15),
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: resize(15, 'h'),
    paddingHorizontal: resize(10),
  },
  small: {
    width: '95%',
    height: resize(120, 'h'),
    marginVertical: resize(10, 'h'),
    marginRight: resize(15),
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: resize(15, 'h'),
    paddingHorizontal: resize(10),
  },
  titleCard: {
    textAlign: 'center',
    color: whiteColor,
    width: resize(120),
  },
  absoluteLike: {
    position: 'absolute',
    zIndex: 2,
    top: resize(20, 'h'),
    right: resize(20),
    width: resize(40),
    height: resize(40, 'h'),
    alignItems: 'flex-end',
  },
});
export default styles;
