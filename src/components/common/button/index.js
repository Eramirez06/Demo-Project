import React from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import styles from './styles';
import { blackColor, whiteColor, primaryColor } from '../../../assets/colors';
import { resize } from '../../../utils/styles';

const Button = ({
	width, color, text, backgroundColor, customStyle, fontSize, onPress, loading,
	colorLoading }) => (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={onPress}
			style={[styles.container, { width, backgroundColor, fontSize: resize(fontSize) }, customStyle]}
		>
			<View style={styles.content}>
				{loading
					? <ActivityIndicator size='large' color={colorLoading} />
					: <Text style={[styles.textInfo, { color }]}>{text}</Text>
				}
			</View>
		</TouchableOpacity>
	)

Button.defaultProps = {
	width: '100%',
	backgroundColor: primaryColor,
	color: whiteColor,
	colorLoading: blackColor,
	customStyle: {},
	fontSize: 16,
	onPress: () => { },
	loading: false
}

export default Button;
