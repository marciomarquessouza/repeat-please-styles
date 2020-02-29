import React, { Component } from 'react';
import { Animated, Image, ImageSourcePropType, Easing } from 'react-native';
import {
	animationFactory,
	IAnimationFactory,
} from '../../../../animation/animationFactory';

interface IMonkeyHeadProps {
	size: number;
	progress: number;
	chartSize: number;
}

export class MonkeyHead extends Component<IMonkeyHeadProps, {}> {
	private bounceAnimation = new Animated.Value(0);

	componentDidMount() {
		this.monkeyHeadAnimation();
	}

	monkeyHeadAnimation = () => {
		const monkeyHeadBounce: IAnimationFactory[] = [
			{
				animationObject: this.bounceAnimation,
				toValue: 1,
				duration: 1000,
				easing: Easing.bounce,
			},
		];
		animationFactory(monkeyHeadBounce);
	};

	monkeyImage = (progress: number): ImageSourcePropType => {
		const monkeyImages = [
			require('../../../../../assets/images/SeriousMonkey.png'),
			require('../../../../../assets/images/MouthMonkey.png'),
			require('../../../../../assets/images/SmileMonkey.png'),
		];
		if (progress >= 0.75) {
			return monkeyImages[2];
		} else if (progress >= 0.25 && progress < 0.75) {
			return monkeyImages[1];
		} else {
			return monkeyImages[0];
		}
	};

	render() {
		const { PI, sin, cos } = Math;
		const { size, chartSize, progress } = this.props;
		const radius = size / 2;
		const chartRadius = chartSize / 2;
		const posX = cos(progress * 2 * PI) * chartRadius - radius;
		const posY = -sin(progress * 2 * PI) * chartRadius - radius;

		return (
			<Animated.View
				style={{
					position: 'absolute',
					top: posY,
					right: posX,
					width: size,
					height: size,
					opacity: this.bounceAnimation,
					transform: [
						{ translateX: -cos(progress * 2 * PI) * 35 },
						{ translateY: sin(progress * 2 * PI) * -35 },
						{ scale: this.bounceAnimation },
					],
				}}>
				<Image
					source={this.monkeyImage(progress)}
					style={{
						width: size,
						height: size,
					}}
				/>
			</Animated.View>
		);
	}
}
