import React, { Component } from 'react';
import { Input, Item, Label } from 'native-base';
import { IIconTextInputProps } from '../interface';

export class FloatLabelInput extends Component<IIconTextInputProps, {}> {
	public static defaultProps = {
		autoCapitalize: 'none',
		autoCompleteType: 'off',
		autoCorrect: false,
		autoFocus: false,
		editable: true,
		label: 'Label Text Here',
	};

	render(): JSX.Element {
		const { label, labelStyle }: IIconTextInputProps = this.props;

		return (
			<Item floatingLabel data-test="floatLabelInput">
				<Label style={labelStyle}>{label}</Label>
				<Input {...this.props} />
			</Item>
		);
	}
}
