import { ISlide } from './components/SlideGrid/types';

export interface ILabels {
	backLabel: string;
	nextLabel: string;
	startLabel: string;
	skipLabel: string;
}

export interface ISlideProps {
	slides: ISlide[];
	duration: number;
	nextScreen: () => void;
	labels: ILabels;
}

export interface IMonkeyHeadProps {
	index: number;
	height: number;
	onPress?: () => void;
}
