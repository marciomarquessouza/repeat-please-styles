import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MonkeyHead, Mood } from '../../../MonkeyHead';
import { IMonkeyHeadProps } from '../../interface';
import { styles } from './styles';

export const MonkeyHeadSlide = ({
	index,
	height,
	onPress,
}: IMonkeyHeadProps) => {
	const [indexState, setIndexState] = useState(index);

	useEffect(() => setIndexState(index), [index]);
	const monkeyHeadSize = { width: 252, height };

	let mood: Mood;
	switch (indexState) {
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
		<View style={styles.monkeyHeadDesign}>
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
