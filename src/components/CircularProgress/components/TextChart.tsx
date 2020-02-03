import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import { styles } from './styles';

export interface ITextChartProps {
	duration?: number | 1000;
	progress: number;
}

export interface ITextChartState {
	textProgress: string;
}

export class TextChart extends Component <ITextChartProps, ITextChartState> {
	private animatedValue = new Animated.Value(0);

	constructor(props: ITextChartProps) {
		super(props);
		this.state = {
			textProgress: '0',
		}
	}

	componentDidMount() {
		this.animate();
	}

	animate = () => {
		const { duration, progress} = this.props;
		const toValue = (progress > 1) ? 1 : progress;
		this.animatedValue.addListener(
			({ value }) => this.setState(
				{ textProgress: (value * 100).toFixed(0) },
			));
		Animated.timing(
			this.animatedValue,
			{
				toValue,
				duration,
				easing: Easing.linear,
			}
		).start();
	}

	render() {
		const { textProgress } = this.state;
		return (
			<Animated.View style={styles.container}>
				<Animated.Text style={styles.textProgressStyle}>
					{`${textProgress}%`}
				</Animated.Text>
				<Animated.Text style={styles.subTextStyle}>
					Week Goal
				</Animated.Text>
			</Animated.View>
		);
	}
}

