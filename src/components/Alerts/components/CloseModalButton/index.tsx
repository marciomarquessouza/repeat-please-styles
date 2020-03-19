import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { color } from '../../../../theme';

export interface ICloseModalProps {
	onCloseModal: () => void;
	style?: ViewStyle;
}

export const CloseModal = ({
	onCloseModal,
	style,
}: ICloseModalProps): JSX.Element => (
	<View {...{ style }} data-test="closeModal">
		<TouchableOpacity onPress={onCloseModal} data-test="closeModalButton">
			<View style={styles.circleContainer}>
				<View style={[styles.xStyle, { transform: [{ rotate: '45deg' }] }]} />
				<View style={[styles.xStyle, { transform: [{ rotate: '-45deg' }] }]} />
			</View>
		</TouchableOpacity>
	</View>
);

const styles = StyleSheet.create({
	circleContainer: {
		backgroundColor: color.grayLight,
		width: 30,
		height: 30,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	xStyle: {
		width: 16,
		borderWidth: 1,
		borderColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		position: 'absolute',
	},
});
