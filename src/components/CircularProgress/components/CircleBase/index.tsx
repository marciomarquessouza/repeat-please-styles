import React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface ICircleBaseProps {
	customStyle: ViewStyle;
	size: number;
	radius: number;
	color: string;
}

export const CircleBase = (props: ICircleBaseProps): JSX.Element => {
	const { customStyle, size, radius, color } = props;
	return (
		<View style={customStyle}>
			<Svg width={size} height={size}>
				<Circle cx={size / 2} cy={size / 2} r={radius} fill={color} />
			</Svg>
		</View>
	);
};
