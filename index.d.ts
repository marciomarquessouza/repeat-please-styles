import React from 'react';

import { IBtutton } from './src/components/Button/interface';
import { IIconTextInputProps } from './src/components/Input/interface';
import { ILogo } from './src/components/Logo';
import { IText } from './src/components/Typography/interface';

declare module 'repeat-please-styles' {
	export import ButtonPrimary = __RepeatPleaseStylesClasses.ButtonPrimary;
	export import ButtonTransparent = __RepeatPleaseStylesClasses.ButtonTransparent;
	export import FloatLabelInput = __RepeatPleaseStylesClasses.FloatLabelInput;
	export import PlaceholderInput = __RepeatPleaseStylesClasses.PlaceholderInput;
	export import Logo = __RepeatPleaseStylesClasses.Logo;
	export import TitleLogo = __RepeatPleaseStylesClasses.TitleLogo;
	export import Title = __RepeatPleaseStylesClasses.Title;
	export import Body = __RepeatPleaseStylesClasses.Body;
	export { IBtutton };
	export { IIconTextInputProps };
	export { ILogo };
	export { IText };
}

declare namespace __RepeatPleaseStylesClasses {
	export class ButtonPrimary extends React.Component<IBtutton> {}
	export class ButtonTransparent extends React.Component<IBtutton> {}
	export class FloatLabelInput extends React.Component<IIconTextInputProps> {}
	export class PlaceholderInput extends React.Component<IIconTextInputProps> {}
	export class Logo extends React.Component<ILogo> {}
	export class TitleLogo extends React.Component<ILogo> {}
	export class Title extends React.Component<IText> {}
	export class Body extends React.Component<IText> {}
}
