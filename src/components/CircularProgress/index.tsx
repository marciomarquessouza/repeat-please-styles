import React, { Component } from 'react';
import { Animated, Dimensions, View } from 'react-native';
import {
	IAnimationFactory,
	animationFactory,
} from '../../animation/animationFactory';
import { Semicircle, Indicator, CircleBase } from './components';
import { semicircleAnimation, indicatorAnimation } from './animations';
import { ICircularProgressProps, ICircularProgressState } from './types';
import { color } from '../../theme';
import { styles } from './styles';
import { MonkeyHead } from './components/MonkeyHead';

const { width } = Dimensions.get('window');

export class CircularProgress extends Component<
	ICircularProgressProps,
	ICircularProgressState
> {
	private lineAnimation = new Animated.Value(0);
	private circleAnimationUp = new Animated.Value(0);
	private circleAnimationDown = new Animated.Value(0);

	constructor(props: ICircularProgressProps) {
		super(props);
		this.state = {
			showCircleUp: true,
			showMonkeyHead: false,
		};
	}

	componentDidUpdate(prevProps: ICircularProgressProps): void {
		if (prevProps.startAnimation !== this.props.startAnimation) {
			this.chartAnimation();
			this.indicatorAnimation();
		}
	}

	chartAnimation = () => {
		const { duration, progress } = this.props;
		const circleAnimation: IAnimationFactory[] = semicircleAnimation(
			progress,
			duration,
			this.circleAnimationUp,
			this.circleAnimationDown,
			() => this.setState({ showCircleUp: false }),
		);
		animationFactory(circleAnimation);
	};

	indicatorAnimation = () => {
		const { duration, progress } = this.props;
		const lineAnimation: IAnimationFactory[] = indicatorAnimation(
			progress,
			duration,
			this.lineAnimation,
			() => this.setState({ showMonkeyHead: true }),
		);
		animationFactory(lineAnimation);
	};

	render() {
		const { lateralMargin, barWidth, progress } = this.props;
		const {
			background: color1,
			darkBackground: color2,
			light,
			white,
			lightText,
		} = color;
		const gradient = { color1, color2 };
		const size = width - 2 * (lateralMargin || 65);
		const radius = size / 2;
		const rotateLine = this.lineAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '360deg'],
		});
		const circleUp = this.circleAnimationUp.interpolate({
			inputRange: [0, 0.5],
			outputRange: ['0deg', '180deg'],
		});
		const circleDown = this.circleAnimationDown.interpolate({
			inputRange: [0, 0.5],
			outputRange: ['0deg', '180deg'],
		});

		const SemiCircles = (
			<>
				<Semicircle {...{ color: gradient, side: 0, rotate: '0deg', size }} />
				<Semicircle {...{ color: light, side: 0, rotate: circleDown, size }} />
				<Semicircle {...{ color: gradient, side: 1, rotate: '0deg', size }} />
				{this.state.showCircleUp && (
					<Semicircle {...{ color: light, side: 1, rotate: circleUp, size }} />
				)}
			</>
		);

		return (
			<View style={[styles.container, { width, height: width }]}>
				{SemiCircles}
				<Indicator
					{...{
						rotateLine,
						size,
						customStyle: styles.overlayContainer,
						color: lightText,
					}}
				/>
				<CircleBase
					radius={radius - (barWidth || 50)}
					color={white}
					size={size}
					customStyle={styles.overlayContainer}
				/>
				{this.state.showMonkeyHead && (
					<MonkeyHead progress={progress} chartSize={size} />
				)}
			</View>
		);
	}
}
