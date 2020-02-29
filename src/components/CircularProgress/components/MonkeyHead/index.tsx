import React, { Component } from 'react';
import { Animated, Image, ImageSourcePropType, Easing } from 'react-native';
import {
	animationFactory,
	IAnimationFactory,
} from '../../../../animation/animationFactory';

interface IMonkeyHeadProps {
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
		const SIZE = 50;
		const { PI, sin, cos } = Math;
		const { chartSize, progress } = this.props;
		const radius = SIZE / 2;
		const chartRadius = chartSize / 2;
		const posX = -cos(progress * 2 * PI) * (chartRadius + radius + 10);
		const posY = -sin(progress * 2 * PI) * (chartRadius + radius + 10);

		return (
			<Animated.View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					alignSelf: 'center',
					position: 'absolute',
					opacity: this.bounceAnimation,
					transform: [
						{ translateX: posX },
						{ translateY: posY },
						{ scale: this.bounceAnimation },
					],
				}}>
				<Image
					source={this.monkeyImage(progress)}
					style={{
						width: SIZE,
						height: SIZE,
					}}
				/>
			</Animated.View>
		);
	}
}
