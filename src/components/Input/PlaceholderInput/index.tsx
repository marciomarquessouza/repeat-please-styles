import React, { Component } from 'react';
import { Input, Item } from 'native-base';
import { IIconTextInputProps } from '../interface';
import { styles } from '../style'

export class PlaceholderInput extends Component<IIconTextInputProps, {}> {
	public static defaultProps = {
		autoCapitalize: 'none',
		autoCompleteType: 'off',
		autoCorrect: false,
		autoFocus: false,
		editable: true,
		placeholder: 'Placeholder Text Here',
	};

	render(): JSX.Element {
		return (
			<Item
				data-test="placeholderInput"
				style={styles.inputContainer}
			>
				<Input {...this.props} />
			</Item>
		);
	}
}
