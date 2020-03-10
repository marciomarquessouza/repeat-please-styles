import React from 'react';
import { Text, View } from 'react-native';

interface ISliderProps {
	index: number;
}

export const Slider = (props: ISliderProps): JSX.Element => {
	return (
		<View>
			<Text>Slider</Text>
		</View>
	);
};
