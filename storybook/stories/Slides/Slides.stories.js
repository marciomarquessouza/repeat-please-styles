import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { Slide } from '../../../src/components/Slides/';
import { color } from '../../../src/theme';

const slides = [];
[1,2,3,4].map((value) => {
	slides.push((
		<View style={{
			flex: 1,
			borderColor: 'green',
			backgroundColor: color.background,
			borderWidth: 2,
			justifyContent: 'center',
			alignItems: 'center',
		}}>
			<Text>{`Slide ${value}`}</Text>
		</View>
	));
});

storiesOf('Slides', module)
	.add('Slide', () => (
		<Slide
			slides={slides}
		/>
	))

