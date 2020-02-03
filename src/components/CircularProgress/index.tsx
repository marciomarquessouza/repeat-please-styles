import React, { Component } from 'react';
import { View } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { CircularChart, TextChart } from './components'
import { styles } from './styles';

const {
	call,
	Clock,
	Value,
	set,
	cond,
	startClock,
	clockRunning,
	timing,
	stopClock,
	block,
} = Animated;

interface ICircularProgressProps {
	goal: number;
	duration: number;
}

interface ICircularProgressState {
	finished: Animated.Value<number>;
	time: Animated.Value<number>;
	position: Animated.Value<number>;
	frameTime: Animated.Value<number>;
	hasFinished: boolean;
}

export class CircularProgressBar extends Component<ICircularProgressProps, ICircularProgressState> {
	constructor(props: ICircularProgressProps) {
		super(props);
		this.state = {
			finished: new Value(0),
			time: new Value(0),
			position: new Value(0),
			frameTime: new Value(0),
			hasFinished: false,
		};
	}

	runTiming = (
		clock: Animated.Clock,
		dest: Animated.Value<number>,
		duration: number,
	) => {
		const config = {
			duration,
			toValue: dest,
			easing: Easing.linear,
		};

		return block([
			cond(clockRunning(clock), 0, [
				set(this.state.finished, 0),
				set(this.state.time, 0),
				set(this.state.frameTime, 0),
				set(config.toValue, dest),
				startClock(clock),
			]),
			timing(clock, this.state, config),
			cond(
				this.state.finished,
				[
					stopClock(clock),
					call([this.state.finished],
						() => {this.setState({ hasFinished: true })}
					)
				]
			),
			this.state.position,
		]);
	};

	render() {
		const clock = new Clock();
		const { duration, goal } = this.props;
		const goalChart = new Value(this.props.goal);

		return (
			<View style={styles.container}>
				<View style={styles.chartContainer}>
					<CircularChart
						progress={this.runTiming(clock, goalChart, duration)}
						hasFinished={this.state.hasFinished}
					/>
				</View>
				<View style={styles.textChartContainer}>
					<TextChart
						progress={goal}
						duration={duration}
					/>
				</View>
			</View>
		);
	}
}
