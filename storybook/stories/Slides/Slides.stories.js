import React from 'react';
import { storiesOf } from '@storybook/react-native';
import {
	Slide,
	SlideFooter,
	SlideLogo,
	SlideHeader,
} from '../../../src/components/Slides/';

const slidesContent = [
	{
		header: <SlideLogo />,
		footer: (
			<SlideFooter text="Pronunciation is a problem for you? You can improve it with Repeat Pelase! " />
		),
	},
	{
		header: <SlideHeader title="HARD WORK!" />,
		footer: (
			<SlideFooter text="No magic here! You wil have all tools to follow your progress and identify and improve your pronunciation weekeness." />
		),
	},
	{
		header: <SlideHeader title="PATH TO SUCCESS!" />,
		footer: (
			<SlideFooter text="No magic here! You wil have all tools to follow your progress and identify and improve your pronunciation weekeness." />
		),
	},
];

const nextScreen = () => null;

storiesOf('Slides', module).add('Slide', () => (
	<Slide
		{...{
			slides: slidesContent,
			nextScreen,
			duration: 800,
			labels: {
				nextLabel: 'NEXT',
				skipLabel: 'SKIP',
				backLabel: 'BACK',
				startLabel: 'START',
			},
		}}
	/>
));
