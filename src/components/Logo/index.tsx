import React from 'react';
import { Image } from 'react-native';
import { LogoTitle } from '../../../assets/images/LogoTitle';

export const Logo = ():JSX.Element => (
	<Image source={require('../../../assets/images/RPMonkeyHead.png')} style={{width: 208, height: 208}} />
);

export { LogoTitle };
