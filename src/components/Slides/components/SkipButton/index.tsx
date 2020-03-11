import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { font } from '../../../../theme';

interface ISkipButtonProps {
	onSkip: () => void;
}

export const SkipButton = ({ onSkip }: ISkipButtonProps): JSX.Element => {
	return (
		<SafeAreaView>
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
		paddingTop: 30,
	},
	textDesign: {
		fontFamily: font.primary,
		fontSize: 21,
	},
});
