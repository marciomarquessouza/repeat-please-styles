export interface ICircularProgressProps {
	lateralMargin?: number;
	barWidth?: number;
	duration: number;
	progress: number;
	startAnimation: boolean;
}

export interface ICircularProgressState {
	showCircleUp: boolean;
}
