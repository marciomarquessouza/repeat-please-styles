import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface IBtutton {
	children: string;
	customStyle?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
	onPress?: () => void;
	rounded?: boolean;
}
