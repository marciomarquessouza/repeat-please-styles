import { Animated, EasingFunction } from 'react-native';

export interface IAnimationFactory {
	animationObject: Animated.Value;
	toValue: number;
	duration: number;
	easing: EasingFunction;
	callback?: () => void;
}

export const animationFactory = (animations: IAnimationFactory[]) => {
	if (!animations.length) return false;
	const animation = animations[0];
	const {
		animationObject,
		toValue,
		duration,
		easing,
		callback
	} = animation;
	Animated.timing(animationObject, {
		toValue,
		duration,
		easing,
	}).start(() => {
		callback && callback();
		animations.shift();
		if (animations.length) {
			animationFactory(animations);
		}
	});
};
