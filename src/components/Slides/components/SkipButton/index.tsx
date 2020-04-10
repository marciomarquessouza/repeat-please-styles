import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';
import { font } from '../../../../theme';

interface ISkipButtonProps {
	onSkip: () => void;
	style?: ViewStyle;
}

export const SkipButton = ({
	onSkip,
	style,
}: ISkipButtonProps): JSX.Element => {
	return (
		<SafeAreaView {...{ style }}>
			<View style={styles.slidePosition}>
				<TouchableOpacity onPress={onSkip}>
					<Text style={styles.textDesign}>Skip</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	slidePosition: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		paddingRight: 30,
		paddingTop: 5,
	},
	textDesign: {
		fontFamily: font.primary,
		fontSize: 20,
	},
});
