import React, { Component } from 'react';
import {
	Animated,
	Dimensions,
	PanResponder,
	PanResponderGestureState,
} from 'react-native';
import { ISlideGridProps, ISlideGridState } from './types';
import { SlideLayout } from './SlideLayout';

export class SlideGrid extends Component<ISlideGridProps, ISlideGridState> {
	WIDTH = Dimensions.get('window').width;
	HEIGHT = Dimensions.get('window').height;

	constructor(props: ISlideGridProps) {
		super(props);
		const position = new Animated.ValueXY();
		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onMoveShouldSetPanResponder: () => true,
			onPanResponderMove: (_, gesture: PanResponderGestureState) => {
				const { slides } = this.props;
				const { lastPosition } = this.state;
				const currentPosition = lastPosition + gesture.dx;
				let slidePosition = currentPosition;

				if (currentPosition > 0) {
					slidePosition = 0;
				} else if (currentPosition <= -this.WIDTH * (slides.length - 1)) {
					slidePosition = -this.WIDTH * (slides.length - 1);
				}

				position.setValue({
					x: slidePosition,
					y: 0,
				});

				return true;
			},
			onPanResponderRelease: (_, gesture: PanResponderGestureState) => {
				const SWIPE_THRESHOLD = this.WIDTH * 0.1;
				const { slides } = this.props;
				const { index } = this.state;

				if (gesture.dx <= -SWIPE_THRESHOLD && index !== slides.length - 1) {
					this.nextSlide();
				} else if (gesture.dx >= SWIPE_THRESHOLD && index !== 0) {
					this.previousSlide();
				} else {
					this.resetSlide();
				}

				return true;
			},
		});

		this.state = {
			position,
			panResponder,
			index: 0,
			lastPosition: 0,
		};
	}

	moveSlide = (toValue: { x: number; y: number }) => {
		const { duration } = this.props;
		return Animated.timing(this.state.position, {
			toValue,
			duration,
			useNativeDriver: false,
		});
	};

	nextSlide = (): void => {
		const { slides } = this.props;
		const slideNumber = this.state.index + 1;
		const slidePosition = -this.WIDTH * slideNumber;

		if (this.state.index === slides.length - 1) return;

		this.moveSlide({ x: slidePosition, y: 0 }).start(() => {
			this.setState({ index: slideNumber, lastPosition: slidePosition });
		});
	};

	previousSlide = (): void => {
		const slideNumber = this.state.index - 1;
		const slidePosition = -this.WIDTH * slideNumber;

		if (this.state.index === 0) return;

		this.moveSlide({ x: slidePosition, y: 0 }).start(() => {
			this.setState({ index: slideNumber, lastPosition: slidePosition });
		});
	};

	resetSlide = (): void => {
		const { index } = this.state;
		const slidePosition = -this.WIDTH * index;
		this.moveSlide({ x: slidePosition, y: 0 }).start(() => {
			this.setState({ lastPosition: slidePosition });
		});
	};

	render() {
		const { nextSlide, previousSlide, WIDTH: width } = this;
		const { slides, nextScreen } = this.props;
		const { position, panResponder, index } = this.state;

		return (
			<SlideLayout
				{...{
					index,
					nextScreen,
					nextSlide,
					panResponder,
					position,
					previousSlide,
					slides,
					width,
				}}
			/>
		);
	}
}
