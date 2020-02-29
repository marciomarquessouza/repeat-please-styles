import React, { Component } from 'react';
import { Text, StyleSheet, View, Animated, Easing } from 'react-native';
import {
	animationFactory,
	IAnimationFactory,
} from '../../../../animation/animationFactory';

interface ITextChartProps {
	duration: number;
	progress: number;
	textChart: string;
}

interface ITextChartState {
	textAnimation: Animated.Value;
	percentValue: number;
}

export class TextChart extends Component<ITextChartProps, ITextChartState> {
	constructor(props: ITextChartProps) {
		super(props);
		this.state = {
			textAnimation: new Animated.Value(0),
			percentValue: 0,
		};
	}

	componentDidMount() {
		this.textAnimation();
	}

	componentWillUnmount() {
		this.state.textAnimation.removeAllListeners();
	}

	textAnimation = (): void => {
		const { duration, progress } = this.props;
		const { textAnimation } = this.state;
		textAnimation.addListener(({ value }) =>
			this.setState({ percentValue: value }),
		);
		const textAnimationConfig: IAnimationFactory = {
			animationObject: textAnimation,
			toValue: progress,
			duration,
			easing: Easing.linear,
		};
		animationFactory([textAnimationConfig]);
	};

	progressPercent = (progress: number): string => {
		const roundProgress = Math.round(progress * 100);
		return `${roundProgress}%`;
	};

	render() {
		const { textChart } = this.props;
		const { percentValue } = this.state;
		return (
			<View style={styles.container}>
				<Text style={styles.headStyle}>
					{this.progressPercent(percentValue)}
				</Text>
				<Text style={styles.subHeadStyle}>{textChart}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	},
	headStyle: {
		fontSize: 48,
		fontWeight: 'bold',
		color: '#656565',
	},
	subHeadStyle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#656565',
	},
});
