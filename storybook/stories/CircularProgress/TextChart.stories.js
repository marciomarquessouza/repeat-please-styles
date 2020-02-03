import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { TextChart } from '../../../src/components/CircularProgress/components/TextChart';
import { View } from 'react-native';

storiesOf('Progress Bar', module)
.addDecorator(getStory => <View style={{
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	borderWidth: 2,
	borderColor: 'red',
}}>{getStory()}</View>)
.add('Text Chart', () => <TextChart progress={0.8} duration={2000}/>)