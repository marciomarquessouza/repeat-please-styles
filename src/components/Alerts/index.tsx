import React, { useState, useEffect, useCallback } from 'react';
import { Animated, Dimensions, SafeAreaView, Text, View } from 'react-native';
import { MonkeyHeadModal } from './components/MonkeyHeadModal';
import { CloseModal } from './components/CloseModalButton';
import { Mood } from '../MonkeyHead';
import { styles } from './styles';

export interface IAlertsProps {
	children: string;
	type: 'warning' | 'error' | 'success';
	showAlert: boolean;
	speed?: number;
}

export interface IPostionXY {
	x: number;
	y: number;
}

const WIDTH = Dimensions.get('window').width;

export const Alerts = ({
	children,
	type,
	showAlert,
	speed,
}: IAlertsProps): JSX.Element | null => {
	const duration = speed || 500;
	const initialPosition: IPostionXY = { x: 0, y: -120 };
	const [modalVisible, setModalVisible] = useState(false);
	const [position] = useState(new Animated.ValueXY(initialPosition));

	const alertAnimation = useCallback(
		(toValue: IPostionXY): void =>
			Animated.timing(position, { duration, toValue }).start(),
		[duration, position],
	);

	useEffect(() => {
		if (showAlert) {
			setModalVisible(true);
			alertAnimation({ x: 0, y: 10 });
		}
	}, [showAlert, alertAnimation]);

	const closeModal = () => {
		alertAnimation(initialPosition);
		setModalVisible(true);
	};

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
	}

	const alertBox = (
		<Animated.View
			style={[
				styles.container,
				{
					left: 0,
					top: position.y,
					width: WIDTH,
				},
			]}>
			<SafeAreaView>
				<View style={styles.boxStyle}>
					<MonkeyHeadModal {...{ mood }} />
					<Text style={styles.textStyle}>{children}</Text>
					<CloseModal onCloseModal={closeModal} style={styles.closeStyle} />
				</View>
			</SafeAreaView>
		</Animated.View>
	);

	return modalVisible ? alertBox : null;
};
