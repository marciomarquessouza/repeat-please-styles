import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { CircularProgress } from '../../../src/components/CircularProgress';
import { View } from 'react-native';

storiesOf('Progress Bar', module)
.addDecorator(getStory => <View style={{
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	borderWidth: 2,
	borderColor: 'red',
}}>{getStory()}</View>)
.add('Circular Progress Bar', () => <CircularProgress />)