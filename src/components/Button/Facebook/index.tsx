import React from 'react';
import {
	StyleSheet,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';
import { LogoF } from './SVG/FacebookLogoF';
import { Text } from 'native-base';

export interface IFacebookButtonProps {
	children: string;
	style?: ViewStyle;
	textStyle?: TextStyle;
	onPress: () => void;
}

export const FacebookButton = ({
	children,
	style,
	textStyle,
	onPress,
}: IFacebookButtonProps): JSX.Element => (
	<View style={[style, styles.container]} data-test="facebookButton">
		<TouchableOpacity {...{ onPress, style: styles.buttonStyle }}>
			<View style={styles.logoStyle}>
				<LogoF />
			</View>
			<Text style={[textStyle, styles.textStyle]}>{children}</Text>
		</TouchableOpacity>
	</View>
);

const styles = StyleSheet.create({
	container: {
		height: 50,
		width: '100%',
		backgroundColor: '#3B5998',
	},
	buttonStyle: {
		flex: 1,
		borderColor: 'green',
		borderWidth: 2,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logoStyle: {
		position: 'absolute',
		left: 10,
		top: 8,
	},
	textStyle: {
		color: '#fff',
		fontSize: 14,
	},
});
