import { IAnimationFactory } from '../../../../animation/animationFactory';
import { Animated, Easing } from 'react-native';

export const indicatorAnimation = (
	progress: number,
	duration: number,
	lineAnimation: Animated.Value,
	callback?: () => void,
): IAnimationFactory[] => {
	const lineAnimations: IAnimationFactory[] = [];
	const isHalf = progress < 0.5;
	const lineUpProgress = isHalf ? progress : 0.5;
	const lineUpDuration = isHalf ? duration : (duration * lineUpProgress);
	const lineUpAnimation: IAnimationFactory = {
		animationObject: lineAnimation,
		toValue: lineUpProgress,
		duration: lineUpDuration,
		easing: Easing.linear,
	};

	lineAnimations.push(lineUpAnimation);

	if (!isHalf) {
		const lineDownProgress = progress - lineUpProgress;
		const lineDownDuration = lineDownProgress * duration;
		const lineDownAnimation: IAnimationFactory = {
			animationObject: lineAnimation,
			toValue: progress,
			duration: lineDownDuration,
			easing: Easing.linear,
		};
		lineAnimations.push(lineDownAnimation);
	}

	return lineAnimations;
};
