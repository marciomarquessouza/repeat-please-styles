import React, { Component } from 'react';
import {
	Animated,
	Dimensions,
	PanResponder,
	PanResponderGestureState,
	View,
} from 'react-native';
import { MonkeyHead } from '../MonkeyHead';
import { Slider } from '../Slider';
import { SkipButton } from '../SkipButton';
import { RenderSlides } from '../RenderSlides';
import { ISlideGridProps, ISlideGridState } from './types';

export class SlideGrid extends Component<ISlideGridProps, ISlideGridState> {
	WIDTH = Dimensions.get('window').width;
	HEIGHT = Dimensions.get('window').height;

	constructor(props: ISlideGridProps) {
		super(props);
		const position = new Animated.ValueXY();
		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
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
			},
		});

		this.state = {
			position,
			panResponder,
			index: 0,
			lastPosition: 0,
		};
	}

	moveSlide = (toValue: { x: number; y: number }): void => {
		const { duration } = this.props;
		Animated.timing(this.state.position, { toValue, duration }).start();
	};

	nextSlide = (): void => {
		const { slides } = this.props;
		const slideNumber = this.state.index + 1;
		const slidePosition = -this.WIDTH * slideNumber;

		if (this.state.index === slides.length - 1) return;

		this.moveSlide({ x: slidePosition, y: 0 });
		this.setState({ index: slideNumber, lastPosition: slidePosition });
	};

	previousSlide = (): void => {
		const slideNumber = this.state.index - 1;
		const slidePosition = -this.WIDTH * slideNumber;

		if (this.state.index === 0) return;

		this.moveSlide({ x: slidePosition, y: 0 });
		this.setState({ index: slideNumber, lastPosition: slidePosition });
	};

	resetSlide = (): void => {
		const { index } = this.state;
		const slidePosition = -this.WIDTH * index;
		this.moveSlide({ x: slidePosition, y: 0 });
		this.setState({ lastPosition: slidePosition });
	};

	render() {
		const { slides, onSkip } = this.props;
		const { position, panResponder } = this.state;

		return (
			<>
				<View>
					<RenderSlides
						{...{
							panResponder,
							slides,
							position,
							height: this.HEIGHT,
							width: this.WIDTH,
						}}
					/>
				</View>
				<SkipButton onSkip={() => console.log('Middle')} />
				<MonkeyHead
					index={this.state.index}
					height={this.HEIGHT}
					onPress={() => this.nextSlide()}
				/>
				<Slider
					slideTotal={slides.length}
					index={this.state.index}
					onBack={() => this.previousSlide()}
					onNext={() => this.nextSlide()}
				/>
			</>
		);
	}
}
