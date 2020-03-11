import React from 'react';
import { SlideGrid } from './components/SlideGrid';
import { Slide01, Slide02, Slide03 } from './components/SlidesTemplate';

interface ISlideProps {
	slidesContent: {
		title: string;
		text: string;
	}[];
}

export const Slide = ({
	slidesContent: contents,
}: ISlideProps): JSX.Element | null => {
	if (contents.length < 3) return null;
	const slides = [
		<Slide01 title={contents[0].title} text={contents[0].text} />,
		<Slide02 title={contents[1].title} text={contents[1].text} />,
		<Slide03 title={contents[2].title} text={contents[2].text} />,
	];
	return <SlideGrid {...{ slides, duration: 800 }} />;
};
