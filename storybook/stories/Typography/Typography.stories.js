import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import { Body, Title } from '../../../src/components/Typography';

storiesOf('Typeography', module)
.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
.add('Title', () => <Title>Title</Title>)
.add('Body', () => <Body>Body</Body>);
