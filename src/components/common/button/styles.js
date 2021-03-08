import { StyleSheet, Platform } from 'react-native';
import { resize } from '../../../utils/styles';

const styles = StyleSheet.create({
	container: {
		height: resize(52, 'h'),
		borderRadius: resize(12),
		alignSelf: 'center',
	},
	content: {
		justifyContent: 'center',
		width: '100%',
		height: '100%',
		alignItems: 'center'
	},
	textInfo: {
		fontWeight: '500',
		fontSize: resize(14)
	},
	absoluteImg: {
		left: resize(29),
		width: resize(20),
		height: resize(20, 'h'),
	},
	centerIcon: {
		height: resize(52, 'h'),
		position: 'absolute',
		zIndex: 2,
		justifyContent: 'center'
	}
})
export default styles;
