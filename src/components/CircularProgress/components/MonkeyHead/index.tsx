import React from 'react'
import { View, Image } from 'react-native';

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
	const monkeyImages = [
		require('../../../../../assets/images/SeriousMonkey.png'),
		require('../../../../../assets/images/MouthMonkey.png'),
		require('../../../../../assets/images/SmileMonkey.png'),
	];
	let monkeyImage =  monkeyImages[0];
	if (progress >= 0.25 && progress <= 0.75 ){
		monkeyImage =  monkeyImages[1];
	} else if (progress > 0.75) {
		monkeyImage =  monkeyImages[2];
	}

	return (
		<View style={{
			position: 'absolute',
			top: posY,
			right: posX,
			width: size,
			height: size,
			transform: [
				{ translateX: - cos(progress * 2 * PI) * 35 },
				{ translateY: sin(progress * 2 * PI) * - 35 },
			]
		}}>
			<Image
				source={monkeyImage}
				style={{ width: size, height: size }}
			/>
		</View>
	);
};
