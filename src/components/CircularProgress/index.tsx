import React, { Component } from 'react';
import {
	Dimensions,
	Easing,
	View,
	Animated,
} from 'react-native';
import { Semicircle, Indicator, CircleBase } from './components';
import { color } from '../../theme';
import { styles } from './styles';

const { width } = Dimensions.get('window');

interface ICircularProgressProps {
	lateralMargin?: number;
	barWidth?: number;
	duration: number;
	progress: number;
	startAnimation: boolean;
}

interface ICircularProgressState {
	showCircleDown: boolean;
	showCircleUp: boolean;
}

export class CircularProgress extends Component<ICircularProgressProps, ICircularProgressState>{
	private lineAnimation = new Animated.Value(0);
	private circleAnimationUp = new Animated.Value(0);
	private circleAnimationDown = new Animated.Value(0);
	private firstAnimationStep = false;

	constructor(props: ICircularProgressProps) {
		super(props);
		this.state = {
			showCircleUp: true,
			showCircleDown: true
		};
	}

	componentDidUpdate(prevProps: ICircularProgressProps): void {
		if (prevProps.startAnimation !== this.props.startAnimation) {
			this.startAnimation();
		}
	}

	startAnimation() {
		this.startCircleUpRotation();
	}

	startCircleUpRotation = () => {
		const { progress, duration } = this.props;
		const isHalf = progress < 0.5;
		const circleUpProgress =  isHalf ? progress : 0.5;
		const circleUpDuration = isHalf ? duration : (duration * circleUpProgress);
		this.circularRotation(
			this.circleAnimationUp,
			circleUpProgress,
			circleUpDuration,
		);
		this.circularRotation(
			this.lineAnimation,
			circleUpProgress,
			circleUpDuration,
		);
	}

	startCircleDownRotation = (toValue: number) => {
		const { progress, duration } = this.props;
		const circleDownProgress = progress - toValue;
		const circleDownDuration = circleDownProgress * duration;
		this.circularRotation(
			this.circleAnimationDown,
			circleDownProgress,
			circleDownDuration,
		);
		this.circularRotation(
			this.lineAnimation,
			progress,
			circleDownDuration,
		);
	}

	circularRotation = (circleAnimation: Animated.Value, toValue: number, duration: number) => {
		Animated.timing(circleAnimation, {
			toValue,
			duration,
			easing: Easing.linear,
		}).start(() => {
			if (this.props.progress >= 0.5 && !this.firstAnimationStep) {
				this.setState({ showCircleUp: false });
				this.firstAnimationStep = true;
				this.startCircleDownRotation(toValue);
			}
		});
	}

	render() {
		const { lateralMargin, barWidth } = this.props;
		const { showCircleDown, showCircleUp } = this.state;
		const {
			background: color1,
			darkBackground: color2,
			light,
			white,
			lightText,
		} = color;
		const gradient = { color1 , color2 };
		const size = width - 2 * (lateralMargin || 50);
		const radius = size / 2;
		const rotateLine = this.lineAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '360deg'],
		})
		const circleUp = this.circleAnimationUp.interpolate({
			inputRange: [0, 0.5],
			outputRange: ['0deg', '180deg'],
		})
		const circleDown = this.circleAnimationDown.interpolate({
			inputRange: [0, 0.5],
			outputRange: ['0deg', '180deg'],
		})
		const semiCirles = [
			{ color: gradient, direction: 0, rotate: '0deg', show: true },
			{ color: light, direction: 0, rotate: circleDown, show: showCircleDown },
			{ color: gradient, direction: 1, rotate: '0deg', show: true },
			{ color: light, direction: 1, rotate: circleUp, show: showCircleUp },
		];

		return (
				<View style={styles.container}>
					{semiCirles.map((semicircle, index: number) => Semicircle({
							...semicircle,
							index,
							size,
						}))}
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
				</View>
		);
	}
}
