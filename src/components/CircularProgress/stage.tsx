import React, { Component } from 'react';
import { Button } from 'react-native';
import { CircularProgress } from './';

interface IStageState {
	startAnimation: boolean;
}

export class CircularProgressStage extends Component<{}, IStageState> {
	state = { startAnimation: false };

	render() {
		return (
			<>
				<CircularProgress
					progress={0.45}
					duration={1000}
					startAnimation={this.state.startAnimation}
				/>
				<Button
					onPress={() => this.setState({ startAnimation: true })}
					title="Start Animation"
				/>
			</>
		);
	}
}
