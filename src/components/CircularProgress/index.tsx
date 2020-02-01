import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { CircularChart } from './components'

const {
	call,
	Clock,
	Value,
	set,
	cond,
	startClock,
	clockRunning,
	timing,
	debug,
	stopClock,
	block,
	concat,
} = Animated;

interface ICircularProgressProps {
	goal: number;
}

interface ICircularProgressState {
	finished: Animated.Value<number>;
	time: Animated.Value<number>;
	position: Animated.Value<number>;
	frameTime: Animated.Value<number>;
	hasFinished: boolean;
}

export default class ProgressBar extends Component<ICircularProgressProps, ICircularProgressState> {
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

	runTiming = (clock: Animated.Clock, value: Animated.Value<number>, dest: Animated.Value<number>) => {
		const config = {
			duration: 2000,
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
			cond(this.state.finished, [stopClock(clock), call([this.state.finished], () => {this.setState({ hasFinished: true })})]),
			this.state.position,
		]);
	};

	render() {
		const clock = new Clock();
		const progress = new Value(0);
		const goal = new Value(this.props.goal);

		return (
			<View>
				<CircularChart
					progress={this.runTiming(clock, progress, goal)}
					hasFinished={this.state.hasFinished}
				/>
			</View>
		);
	}
}
