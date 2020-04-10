import { Animated, PanResponderInstance } from 'react-native';

export interface ISlide {
	header: JSX.Element | null;
	footer: JSX.Element | null;
}

export interface ISlideGridProps {
	slides: ISlide[];
	duration: number;
	nextScreen: () => void;
}

export interface ISlideGridState {
	position: Animated.ValueXY;
	panResponder: PanResponderInstance;
	index: number;
	lastPosition: number;
}
