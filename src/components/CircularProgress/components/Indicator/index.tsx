import React from 'react';
import { Animated, ViewStyle } from 'react-native';
import Svg, { Line } from 'react-native-svg';

interface IIndicatorProps {
	rotateLine: Animated.AnimatedInterpolation;
	size: number;
	customStyle: ViewStyle;
	color: string;
}

export const Indicator = (props: IIndicatorProps): JSX.Element => {
	const { rotateLine, size, customStyle, color } = props;
	const radius = size / 2;

	return (
		<Animated.View style={[customStyle, {transform: [{ rotate: rotateLine }]}]}>
			<Svg width={size+10} height={size}>
				<Line
					x1={size/2}
					y1={size/2}
					x2={0}
					y2={radius}
					stroke={color}
					strokeWidth={4}
				/>
			</Svg>
		</Animated.View>
	);
};
