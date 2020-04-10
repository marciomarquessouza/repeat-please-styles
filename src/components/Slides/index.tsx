import React, { Component } from 'react';
import { SlideGrid, SlideLogo, SlideHeader, SlideFooter } from './components';
import { ISlide } from './components/SlideGrid/types';

interface ISlideProps {
	slides: ISlide[];
	duration: number;
	nextScreen: () => void;
}

export class Slide extends Component<ISlideProps, {}> {
	constructor(props: ISlideProps) {
		super(props);
	}

	static Logo = SlideLogo;
	static Header = SlideHeader;
	static Footer = SlideFooter;

	render() {
		const { slides, duration, nextScreen } = this.props;
		return <SlideGrid {...{ slides, duration, nextScreen }} />;
	}
}
