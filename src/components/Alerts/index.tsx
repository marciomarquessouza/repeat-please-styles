import React, { useState, useEffect, useCallback } from 'react';
import { Animated, Dimensions, SafeAreaView, Text, View } from 'react-native';
import { MonkeyHeadModal } from './components/MonkeyHeadModal';
import { CloseModal } from './components/CloseModalButton';
import { Mood } from '../MonkeyHead';
import { styles } from './styles';

export interface IAlertsProps {
	message: string;
	type: 'warning' | 'error' | 'success';
	shown: boolean;
	speed?: number;
	onCloseModal: () => void;
}

export interface IPostionXY {
	x: number;
	y: number;
}

const WIDTH = Dimensions.get('window').width;

export const Alerts = ({
	message,
	type,
	shown,
	speed,
	onCloseModal,
}: IAlertsProps): JSX.Element | null => {
	const duration = speed || 500;
	const initialPosition: IPostionXY = { x: 0, y: -120 };
	const finalPosition: IPostionXY = { x: 0, y: 10 };
	const [modalVisible, setModalVisible] = useState(true);
	const [position] = useState(new Animated.ValueXY(initialPosition));

	const alertAnimation = useCallback(
		(toValue: IPostionXY, showModal: boolean): void =>
			Animated.timing(position, {
				duration,
				toValue,
				useNativeDriver: true,
			}).start(() => !showModal && setModalVisible(false)),
		[duration, position],
	);

	useEffect(() => {
		setModalVisible(true);
		const animationSetup = shown ? finalPosition : initialPosition;
		alertAnimation(animationSetup, shown);
	}, [shown, alertAnimation, finalPosition, initialPosition]);

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
					<Text style={styles.textStyle}>{message}</Text>
					<CloseModal {...{ onCloseModal, style: styles.closeStyle }} />
				</View>
			</SafeAreaView>
		</Animated.View>
	);

	return modalVisible ? alertBox : null;
};
