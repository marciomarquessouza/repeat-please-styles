import React, { createContext, useState, useEffect } from 'react';
import { SlideGrid } from './components/SlideGrid';
import { SlideHeader } from './components/SlidesTemplate/SlideHeader';
import { SlideFooter } from './components/SlidesTemplate/SlideFooter';
import { SlideLogo } from './components/SlidesTemplate/SlideLogo';
import { ILabels, ISlideProps } from './interface';

const defaultLabels: ILabels = {
	backLabel: 'BACK',
	nextLabel: 'NEXT',
	startLabel: 'START',
	skipLabel: 'SKIP',
};

export const LabelContext = createContext(defaultLabels);

export const Slide = ({
	slides,
	duration,
	nextScreen,
	labels,
}: ISlideProps) => {
	const [labelState, setLabelState] = useState(labels);

	useEffect(() => {
		setLabelState(labels);
	}, [labels]);

	return (
		<LabelContext.Provider value={{ ...labelState }}>
			<SlideGrid {...{ slides, duration, nextScreen }} />
		</LabelContext.Provider>
	);
};

export { SlideLogo, SlideHeader, SlideFooter };
