import { Animated, PanResponderInstance } from 'react-native';

export interface ISlideGridProps {
	slides: JSX.Element[];
	duration: number;
	nextScreen: () => void;
}

export interface ISlideGridState {
	position: Animated.ValueXY;
	panResponder: PanResponderInstance;
	index: number;
	lastPosition: number;
}
