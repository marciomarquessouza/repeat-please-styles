import React, { Component } from 'react';
import { Icon, Input, Item, Label } from 'native-base';
import { IIconTextInputProps } from '../interface';

export class FloatLabelInputIcon extends Component<IIconTextInputProps, {}> {
	public static defaultProps = {
		autoCapitalize: 'none',
		autoCompleteType: 'off',
		autoCorrect: false,
		autoFocus: false,
		editable: true,
		fontSize: 24,
		label: 'Label Text Here',
	};

	render(): JSX.Element {
		const {
			color,
			fontSize,
			icon,
			iconStyle,
			label,
			labelStyle,
		}: IIconTextInputProps = this.props;

		return (
			<Item floatingLabel data-test="floatInputComponent">
				<Label style={labelStyle}>{label}</Label>
				<Input {...this.props} />
				<Icon name={icon || 'mail'} style={[{ color, fontSize }, iconStyle]} />
			</Item>
		);
	}
}
