import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { CircularProgressStage } from '../../../src/components/CircularProgress/stage';
import { View } from 'react-native';

storiesOf('Progress Bar', module)
.addDecorator(getStory => <View style={{
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	borderColor: 'red',
	borderWidth: 2,
}}>{getStory()}</View>)
.add('Circular Progress Bar', () => <CircularProgressStage />)
