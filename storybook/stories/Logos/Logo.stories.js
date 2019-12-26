import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import { Logo, TitleLogo } from '../../../src/components/Logo';

storiesOf('Logo', module)
.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
.add('Main Logo', () => <Logo />)
.add('Title Logo', () => <TitleLogo />)