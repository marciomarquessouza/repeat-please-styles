import React from 'react'
import { View } from 'native-base';

interface IMonkeyHeadProps {
	size: number;
	progress: number;
	chartSize: number;
}

export const MonkeyHead = (props: IMonkeyHeadProps): JSX.Element => {
	const { PI, sin, cos } = Math;
	const { size, chartSize, progress } = props;
	const radius = size / 2;
	const chartRadius = chartSize / 2
	const posX = (cos(progress * 2 * PI) * chartRadius) - radius;
	const posY = (- sin(progress * 2 * PI) * chartRadius) - radius;

	return (
		<View style={{
			position: 'absolute',
			top: posY,
			right: posX,
			width: size,
			height: size,
			borderColor: 'red',
			borderWidth: 2,
			transform: [
				{ translateX: - cos(progress * 2 * PI) * 30 },
				{ translateY: sin(progress * 2 * PI) * - 30 },
			]
		}}>
		</View>
	);
}