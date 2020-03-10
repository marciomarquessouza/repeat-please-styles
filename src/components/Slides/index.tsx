import React, { Component } from 'react';
import {
	Animated,
	Dimensions,
	PanResponder,
	PanResponderInstance,
	PanResponderGestureState,
	Text,
	View,
} from 'react-native';
import { styles } from './styles';
import { MonkeyHead } from 	'./components/MonkeyHead';
import { Slider } from './components/Slider';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const SLIDE_TIMING = 1000;
const SWIPE_THRESHOLD = WIDTH * 0.1;
let index = 0;
let lastPosition = 0;

interface ISlideProps {
	slides: JSX.Element[];
}

interface ISlideState {
	position: Animated.ValueXY;
	panResponder: PanResponderInstance;
	startAnimation: boolean;
	index: number;
}

export class Slide extends Component<ISlideProps, ISlideState> {
	constructor(props: ISlideProps) {
		super(props);
		const position = new Animated.ValueXY();
		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => this.state.startAnimation,
			onPanResponderMove: (_, gesture: PanResponderGestureState) => {
				const { slides } = this.props;
				const currentPosition = lastPosition + gesture.dx;
				let slidePosition = currentPosition;

				if (currentPosition > 0) {
					slidePosition = 0;
				} else if (currentPosition <= -WIDTH * (slides.length - 1)) {
					slidePosition = -WIDTH * (slides.length - 1);
				}

				position.setValue({
					x: slidePosition,
					y: 0,
				});
			},
			onPanResponderRelease: (_, gesture: PanResponderGestureState) => {
				const { slides } = this.props;

				if (gesture.dx <= -SWIPE_THRESHOLD && index !== slides.length - 1) {
					this.nextSlide();
				} else if (gesture.dx >= SWIPE_THRESHOLD && index !== 0) {
					this.previousSlide();
				} else {
					this.resetSlide();
				}

				lastPosition = -WIDTH * index;
			},
		});

		this.state = {
			position,
			panResponder,
			startAnimation: true,
			index,
		};
	}

	noSlide = (): JSX.Element => (
		<View style={styles.noSlideStyle}>
			<Text>No slides available</Text>
		</View>
	);

	moveSlide = (toValue: { x: number; y: number }): void => {
		Animated.timing(this.state.position, {
			toValue,
			duration: SLIDE_TIMING,
		}).start();
	};

	nextSlide = (): void => {
		const { slides } = this.props;
		if (this.state.index === slides.length - 1) return;
		this.moveSlide({ x: -WIDTH * ++index, y: 0 });
		this.setState({ index });
	};

	previousSlide = (): void => {
		if (this.state.index === 0) return;
		this.moveSlide({ x: -WIDTH * --index, y: 0 });
		this.setState({ index });
	}

	resetSlide = (): void => {
		this.moveSlide({ x: -WIDTH * index, y: 0 });
	}

	renderSlides = (): JSX.Element => {
		const { slides } = this.props;
		const { panResponder, position } = this.state;
		const slidesPanel: JSX.Element[] = [];

		if (!slides.length) return this.noSlide();

		slides.map((slide, slideIndex: number) => {
			slidesPanel.push(
				<View
					key={slideIndex}
					style={{
						top: 0,
						height: HEIGHT,
						width: WIDTH,
					}}>
					{slide}
				</View>,
			);
		});

		return (
			<Animated.View
				style={{
					flex: 1,
					flexDirection: 'row',
					left: position.x,
				}}
				{...panResponder.panHandlers}>
				{slidesPanel}
			</Animated.View>
		);
	};

	render() {
		const { slides } = this.props;
		return (
			<>
				<View>
					{this.renderSlides()}
				</View>
				<MonkeyHead
					index={this.state.index}
					height={HEIGHT}
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
