import { IAnimationFactory } from '../../../../animation/animationFactory';
import { Animated, Easing } from 'react-native';

export const semicircleAnimation = (
	progress: number,
	duration: number,
	circleAnimationUp: Animated.Value,
	circleAnimationDown: Animated.Value,
	callback?: () => void,
): IAnimationFactory[] => {
	const circleAnimations: IAnimationFactory[] = [];
	const isHalf = progress < 0.5;
	const circleUpProgress = isHalf ? progress : 0.5;
	const circleUpDuration = isHalf ? duration : duration * circleUpProgress;
	const circleUpAnimation: IAnimationFactory = {
		animationObject: circleAnimationUp,
		toValue: circleUpProgress,
		duration: circleUpDuration,
		easing: Easing.linear,
		callback,
	};

	circleAnimations.push(circleUpAnimation);

	if (!isHalf) {
		const circleDownProgress = progress - circleUpProgress;
		const circleDownDuration = circleDownProgress * duration;
		const circleDownAnimation: IAnimationFactory = {
			animationObject: circleAnimationDown,
			toValue: circleDownProgress,
			duration: circleDownDuration,
			easing: Easing.linear,
		};

		circleAnimations.push(circleDownAnimation);
	}

	return circleAnimations;
};
