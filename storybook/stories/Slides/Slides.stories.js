import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Slide } from '../../../src/components/Slides/';

const slidesContent = [
	{
		title: "PRONUNCIATION?",
		text: "Pronunciation is a problem for you? You can improve it with Repeat Pelase!",
	},
	{
		title: "HARD WORK!",
		text: "No magic here! You wil have all tools to follow your progress and identify and improve your pronunciation weakeness.",
	},
	{
		title: "PATH TO SUCCESS!",
		text: "No more time to left. Let's start now!",
	},
];

storiesOf('Slides', module)
	.add('Slide', () => (
		<Slide {...{ slidesContent }} />
	))
