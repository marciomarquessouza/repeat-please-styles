import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import CenterView from '../CenterView';
import { Alerts } from '../../../src/components';

storiesOf('Alerts', module)
.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
.add('Error', () => <Alerts>No Connection =[</Alerts>)