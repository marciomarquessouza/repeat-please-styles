import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Divider } from '../../../src/components/Divider';

storiesOf('Divider', module)
.add('Basic Divider', () => <Divider text="OR" />)
