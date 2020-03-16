import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import { Alerts } from '../../../src/components';

storiesOf('Alerts', module)
.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
.add('Error', () => <Alerts type="error" >No Connection =[</Alerts>)
.add('Warning', () => <Alerts type="warning" >No Selected Word</Alerts>)
.add('Success', () => <Alerts type="success" >Yeep =]</Alerts>)