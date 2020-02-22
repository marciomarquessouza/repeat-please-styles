import React from 'react';
import { Animated } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';

interface ISemicircleProps {
	index: number;
	color: string | { color1: string, color2: string };
	direction: number;
	rotate: Animated.AnimatedInterpolation | string;
	show: boolean;
	size: number;
}

export const Semicircle = (props: ISemicircleProps): JSX.Element | null => {
	const { color, direction, index, rotate, show, size } = props;
	const radius = size / 2;
	const circleColor = typeof color === 'string' ? color : 'url(#gradient)';
	const color1 = typeof color === 'object' ? color.color1 : '#EBD935';
	const color2 = typeof color === 'object' ? color.color2 : '#FFC300';

	const semicircle = (
		<Animated.View
			key={index}
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				alignSelf: 'center',
				position: 'absolute',
				transform: [{ rotate }],
			}}>
			<Svg width={size} height={size}>
				<Defs>
					<LinearGradient id="gradient" x1="0" x2="100%" y1="0" y2="0">
						<Stop offset="0" stopColor={color1} />
						<Stop offset="1" stopColor={color2} />
					</LinearGradient>
				</Defs>
				<Path fill={circleColor} d={`M 0 ${radius} a 1 1 0 0 ${direction} ${size} 0`} />
			</Svg>
		</Animated.View>
	);
	return show ? semicircle : null;
};
