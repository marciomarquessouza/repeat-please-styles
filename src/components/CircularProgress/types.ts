export interface ICircularProgressProps {
	lateralMargin?: number;
	barWidth?: number;
	duration: number;
	progress: number;
	startAnimation: boolean;
	chartText: string;
}

export interface ICircularProgressState {
	showCircleUp: boolean;
	showMonkeyHead: boolean;
	showTextChart: boolean;
}
