import React, { useState, useEffect } from 'react';
import {Modal, Text, View, SafeAreaView, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { MonkeyHeadModal } from './components/MonkeyHeadModal';
import { CloseModal } from './components/CloseModalButton';
import { Mood } from '../MonkeyHead';
import { font } from '../../theme';

export interface IAlertsProps {
	children: string;
	type: 'warning' | 'error' | 'success';
}

export const Alerts = ({ children, type }: IAlertsProps): JSX.Element => {
	const [ modalVisible, setModalVisible ] = useState(true);

	const closeModal = () => {
		setModalVisible(false);
	}

	let mood: Mood;
	switch (type) {
		case 'error':
			mood = Mood.sad;
			break;
		case 'warning':
			mood = Mood.curious;
			break;
		case 'success':
			mood = Mood.happy;
			break;
	};

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}>
				<TouchableWithoutFeedback onPress={closeModal}>
					<SafeAreaView>
						<View style={styles.boxStyle}>
							<MonkeyHeadModal {...{mood}} />
							<Text style={styles.textStyle}>{children}</Text>
							<CloseModal
								onCloseModal={closeModal}
								style={styles.closeStyle}
							/>
						</View>
					</SafeAreaView>
				</TouchableWithoutFeedback>
		</Modal>
	);
};

const styles = StyleSheet.create({
	boxStyle: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#ABABAB',
		height: 60,
		borderRadius: 10,
		marginHorizontal: 20,
		alignItems: 'center',
		paddingHorizontal: 10,
		backgroundColor: "#fff",
	},
	textStyle: {
		fontFamily: font.primary,
		fontSize: 20,
		fontWeight: 'bold',
		paddingHorizontal: 20,
	},
	closeStyle: {
		position: 'absolute',
		right: 0,
		marginHorizontal: 20,
	},
});
