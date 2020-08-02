import React, { Component, createContext } from 'react';
import { SlideGrid, SlideLogo, SlideHeader, SlideFooter } from './components';
import { ISlide } from './components/SlideGrid/types';

interface ILabels {
	backLabel: string;
	nextLabel: string;
	startLabel: string;
	skipLabel: string;
}

interface ISlideProps {
	slides: ISlide[];
	duration: number;
	nextScreen: () => void;
	labels: ILabels;
}

interface ISlideState {
	labels: ILabels;
}

const defaultLabels: ILabels = {
	backLabel: 'BACK',
	nextLabel: 'NEXT',
	startLabel: 'START',
	skipLabel: 'SKIP',
};

export const LabelContext = createContext<ILabels>(defaultLabels);

export class Slide extends Component<ISlideProps, ISlideState> {
	constructor(props: ISlideProps) {
		super(props);
		this.state = { labels: props.labels };
	}

	componentDidUpdate(prevProps: ISlideProps) {
		const { labels } = this.props;
		if (JSON.stringify(prevProps.labels) !== JSON.stringify(labels)) {
			this.setState({ labels: this.props.labels });
		}
	}

	static Logo = SlideLogo;
	static Header = SlideHeader;
	static Footer = SlideFooter;

	render() {
		const { slides, duration, nextScreen } = this.props;
		return (
			<LabelContext.Provider value={this.state.labels}>
				<SlideGrid {...{ slides, duration, nextScreen }} />
			</LabelContext.Provider>
		);
	}
}
