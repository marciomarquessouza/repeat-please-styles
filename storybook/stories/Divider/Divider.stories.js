import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Divider } from '../../../src/components/Divider';
import { View } from 'react-native';

storiesOf('Divider', module)
.addDecorator(getStory => <View style={{
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	borderColor: 'green',
	borderWidth: 2,
}}>{getStory()}</View>)
.add('Basic Divider', () => <Divider text="OR" />)
