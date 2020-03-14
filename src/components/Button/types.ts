import { TextStyle, ViewStyle } from 'react-native';

export interface IBtuttonProps {
	children: string;
	style?: ViewStyle;
	textStyle?: TextStyle;
	onPress?: () => void;
	isLoading?: boolean;
}
