import {
	KeyboardTypeOptions,
	LayoutChangeEvent,
	NativeSyntheticEvent,
	StyleProp,
	TextInputChangeEventData,
	TextInputEndEditingEventData,
	TextInputFocusEventData,
	TextStyle,
	ViewStyle,
} from 'react-native';

export interface IIconTextInputProps {
	autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
	autoCompleteType?:
		| 'email'
		| 'name'
		| 'password'
		| 'postal-code'
		| 'street-address'
		| 'tel'
		| 'username'
		| 'off';
	autoCorrect?: boolean;
	autoFocus?: boolean;
	color?: string;
	editable?: boolean;
	floatingLabel?: boolean;
	fontSize?: number;
	hasError?: boolean;
	icon?: string;
	iconPosition?: 'left' | 'right';
	iconStyle?: StyleProp<ViewStyle>;
	iconType?:
		| 'AntDesign'
		| 'Entypo'
		| 'EvilIcons'
		| 'Feather'
		| 'FontAwesome'
		| 'FontAwesome5'
		| 'Foundation'
		| 'Ionicons'
		| 'MaterialCommunityIcons'
		| 'MaterialIcons'
		| 'Octicons'
		| 'SimpleLineIcons'
		| 'Zocial';
	keyboardType?: KeyboardTypeOptions;
	label?: string;
	labelStyle?: StyleProp<TextStyle>;
	maxLength?: number;
	onBlur?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
	onChange?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
	onChangeText?: (text: string) => void;
	onEndEditing?: (
		e: NativeSyntheticEvent<TextInputEndEditingEventData>,
	) => void;
	onLayout?: (event: LayoutChangeEvent) => void;
	onKeyPress?: () => void;
	placeholder?: string;
	placeholderTextColor?: string;
	secureTextEntry?: boolean;
	selectionColor?: string;
	value?: string;
}
