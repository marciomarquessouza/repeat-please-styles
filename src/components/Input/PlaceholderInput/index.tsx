import React, { Component } from 'react';
import { Input, Item } from 'native-base';
import { IIconTextInputProps } from '../interface';

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
			<Item>
				<Input {...this.props} />
			</Item>
		);
	}
}
