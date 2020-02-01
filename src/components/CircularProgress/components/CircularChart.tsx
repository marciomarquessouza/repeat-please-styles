import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Stop, Text } from 'react-native-svg';
import Animated from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const { PI, cos, sin } = Math;
const AnimatedPath = Animated.createAnimatedComponent(Path);
const { interpolate, multiply } = Animated;

export interface ICircularProgressProps {
	progress: Animated.Node<number>;
	lateralMargin?: number;
	staticColor?: string;
	gradientColor?: {
		firstColor: string;
		secondColor: string;
	};
	barWidth?: number;
	hasFinished?: boolean;
}

export const CircularChart = ({
	progress,
	lateralMargin,
	staticColor,
	gradientColor,
	barWidth,
	hasFinished,
}: ICircularProgressProps ): JSX.Element => {
	const size = width - 100 - (lateralMargin || 30);
	const strokeWidth = barWidth || 50;
	const centerX = size / 2;
	const centerY = size / 2;
	const A = PI + PI * 0.4;
	const radius = (size - strokeWidth) / 2;
	const startAngle = PI + PI * 0.2;
	const endAngle = 2 * PI - PI * 0.2;
	const startArcX = centerX - radius * cos(startAngle);
	const startArcY = centerY + (-radius * sin(startAngle));
	const endArcX = centerX - radius * cos(endAngle);
	const endArcY = centerY + (-radius * sin(endAngle));
	const circumference = radius * A;
	const d = `M ${startArcX} ${startArcY} A ${radius} ${radius} 0 1 0 ${endArcX} ${endArcY}`;
	const firstColor = gradientColor?.firstColor || "#EBD935";
	const secondColor = gradientColor?.secondColor || "#FFC300";
	const alpha = interpolate(progress, {
		inputRange: [0, 1],
		outputRange: [0, A],
	});
	const strokeDashoffset = multiply(alpha, radius);

	return (
		<Svg width={size} height={size}>
			<Defs>
				<LinearGradient id="gradient" x1="0" x2="100%" y1="0" y2="0">
					<Stop offset="0" stopColor={firstColor} />
					<Stop offset="1" stopColor={secondColor} />
				</LinearGradient>
			</Defs>
			<Path
				fill="none"
				stroke="url(#gradient)"
				strokeDasharray={`${circumference}, ${circumference}`}
				{...{d, strokeWidth}}
			/>
			<AnimatedPath
				fill="none"
				stroke={staticColor || "#F2F2F2"}
				strokeDasharray={`${circumference}, ${circumference}`}
				{...{ d, strokeDashoffset, strokeWidth }}
			/>
			{hasFinished 
			? <Text 
				x="35%"
				y="50%"
				fontSize="40"
				fontWeight="bold">
					80%
				</Text> : null }
		</Svg>
	);
};
