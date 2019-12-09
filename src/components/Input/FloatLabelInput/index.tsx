import React, { Component } from 'react';
import { Input, Item, Label } from 'native-base';
import { IIconTextInputProps } from '../interface';
import { styles } from '../style';

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
			<Item
				floatingLabel
				data-test="floatLabelInput"
				style={styles.inputContainer}>
				<Label style={labelStyle}>{label}</Label>
				<Input {...this.props} />
			</Item>
		);
	}
}
