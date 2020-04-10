import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Slide } from '../../../src/components/Slides/';

const slidesContent = [
	{
		header: <Slide.Logo />,
		footer: <Slide.Footer text="Pronunciation is a problem for you? You can improve it with Repeat Pelase! " />,
	},
	{
		header: <Slide.Header title="HARD WORK!" />,
		footer: <Slide.Footer text="No magic here! You wil have all tools to follow your progress and identify and improve your pronunciation weekeness." />,
	},
	{
		header: <Slide.Header title="PATH TO SUCCESS!" />,
		footer: <Slide.Footer text="No magic here! You wil have all tools to follow your progress and identify and improve your pronunciation weekeness." />,
	},
];

const nextScreen = () => null;

storiesOf('Slides', module)
	.add('Slide', () => (
		<Slide {...{ slides: slidesContent, nextScreen, duration: 800 }} />
	))
