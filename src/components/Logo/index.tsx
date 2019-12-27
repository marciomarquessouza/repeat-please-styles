import React from 'react';
import { StyleSheet, ImageStyle } from 'react-native';
import { Image } from 'react-native';
import { LogoTitle } from '../../../assets/images/LogoTitle';
import { SvgProps } from 'react-native-svg';

export interface ILogo {
	customStyle?: ImageStyle;
}

const styles = StyleSheet.create({
	imageStyle: {
		width: 208,
		height: 208,
	},
});

export const Logo = ({ customStyle }: ILogo): JSX.Element => (
	<Image
		source={require('../../../assets/images/RPMonkeyHead.png')}
		style={[styles.imageStyle, customStyle]}
	/>
);

export const TitleLogo = (props: SvgProps): JSX.Element => (
	<LogoTitle {...props} />
);
