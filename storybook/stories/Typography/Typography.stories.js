import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import { Typography } from '../../../src/components/Typography';

storiesOf('Typeography', module)
.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
.add('Test', () => <Typography>Teste</Typography>);