import React, { Component } from 'react';
import { Icon, Input, Item } from 'native-base';
import { IIconTextInputProps } from '../interface';

export class PlaceholderInputIcon extends Component<IIconTextInputProps, {}> {
	public static defaultProps = {
		autoCapitalize: 'none',
		autoCompleteType: 'off',
		autoCorrect: false,
		autoFocus: false,
		editable: true,
		fontSize: 24,
		placeholder: 'Placeholder Text Here',
	};

	render(): JSX.Element {
		const {
			color,
			fontSize,
			icon,
			iconStyle,
		}: IIconTextInputProps = this.props;

		return (
			<Item data-test="placeholderInputIcon">
				<Input {...this.props} />
				<Icon name={icon || 'mail'} style={[{ color, fontSize }, iconStyle]} />
			</Item>
		);
	}
}
