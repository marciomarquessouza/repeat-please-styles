import React, { Component } from 'react';
import { Icon, Input, Item, Label } from 'native-base';
import { IIconTextInputProps } from '../interface';
import { styles } from '../style';

export class FloatLabelInput extends Component<IIconTextInputProps, {}> {
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
			<Item
				floatingLabel
				data-test="floatLabelInput"
				style={styles.inputContainer}>
				<Label style={labelStyle}>{label}</Label>
				<Input {...this.props} />
				{icon &&
					<Icon
						name={icon}
						data-test="floatIconInout"
						style={[{ color, fontSize }, iconStyle]}
					/>
				}
			</Item>
		);
	}
}
