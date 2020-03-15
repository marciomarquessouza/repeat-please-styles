import React from 'react';
import Svg from 'react-native-svg';
import { Ears, Mouth, EyeBrow, Eyes, Face, Hair, Noose } from './SVG';
import { View, ViewStyle } from 'react-native';

export enum Mood {
	sad = 'sad',
	curious = 'curious',
	happy = 'happy',
}

interface IMonkeyHeadProps {
	width?: number;
	height?: number;
	mood: Mood;
	style?: ViewStyle;
}

export const MonkeyHead = ({
	mood,
	style,
	width,
	height,
}: IMonkeyHeadProps): JSX.Element => (
	<View {...{ style }}>
		<Svg
			width={width || 260}
			height={height || 290}
			viewBox="0 0 260 290"
			fill="none">
			{Face}
			{Eyes[mood]}
			{Hair}
			{Noose}
			{Ears}
			{Mouth[mood]}
			{EyeBrow[mood]}
		</Svg>
	</View>
);
