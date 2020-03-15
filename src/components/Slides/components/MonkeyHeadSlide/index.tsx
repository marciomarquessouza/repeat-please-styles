import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MonkeyHead, Mood } from '../../../MonkeyHead';

interface IMonkeyHeadProps {
	index: number;
	height: number;
	onPress?: () => void;
}

export const MonkeyHeadSlide = (props: IMonkeyHeadProps): JSX.Element => {
	const [index, setIndex] = useState(props.index);

	useEffect(() => setIndex(props.index), [props.index]);

	const { height, onPress } = props;
	const monkeyHeadSize = { width: 252, height: 280 };
	const top = height / 2 - monkeyHeadSize.height / 2 - 30;

	let mood: Mood;
	switch (index) {
		case 0:
			mood = Mood.sad;
			break;
		case 1:
			mood = Mood.curious;
			break;
		case 2:
			mood = Mood.happy;
			break;
		default:
			mood = Mood.sad;
			break;
	}

	return (
		<View style={[styles.monkeyHeadDesign, { top }]}>
			<TouchableOpacity onPress={onPress} activeOpacity={1}>
				<MonkeyHead
					height={monkeyHeadSize.height}
					width={monkeyHeadSize.width}
					mood={mood}
				/>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	monkeyHeadDesign: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		position: 'absolute',
	},
});
