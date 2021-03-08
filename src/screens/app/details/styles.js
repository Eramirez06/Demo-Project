import { StyleSheet } from 'react-native';
import { resize } from '../../../utils/styles';
import { whiteColor } from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: resize(150),
    height: resize(200, 'h'),
  },
  image: {
    width: resize(50),
    height: resize(50, 'h'),
    justifyContent: 'center',
    paddingLeft: resize(10),
  },
  content: {
    paddingHorizontal: resize(10),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: resize(10, 'h'),
  },
  row2: {
    flexDirection: 'row',
    marginTop: resize(20, 'h'),
  },
  title: {
    color: whiteColor,
    fontSize: resize(16),
  },
  desc: {
    color: whiteColor,
    fontSize: resize(14),
    marginTop: resize(3, 'h'),
    marginBottom: resize(5, 'h'),
    textAlign: 'justify',
  },
  complement: {
    flex: 1,
    paddingHorizontal: resize(15),
    height: resize(200, 'h'),
    justifyContent: 'space-between',
  },
  half: {
    width: '50%',
  },
  separator: {
    height: resize(10),
  },
  tumb: {
    width: '100%',
    height: resize(300, 'h'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    width: resize(100),
    height: resize(100, 'h'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
