import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '.';

storiesOf('Welcome', module).add('to Repeat Please Storybook', () => (
	<Welcome showApp={linkTo('Button')} />
));
