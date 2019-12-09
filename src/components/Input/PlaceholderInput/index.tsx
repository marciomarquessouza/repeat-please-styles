import React, { Component } from 'react';
import { Input, Icon, Item } from 'native-base';
import { IIconTextInputProps } from '../interface';
import { styles } from '../style';

export class PlaceholderInput extends Component<IIconTextInputProps, {}> {
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
			<Item data-test="placeholderInput" style={styles.inputContainer}>
				<Input
					{...this.props}
					style={ styles.inputStyle }
				/>
				{icon && <Icon name={icon} style={[{ color, fontSize }, iconStyle]} />}
			</Item>
		);
	}
}
