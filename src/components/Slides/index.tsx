import React, { Component } from 'react';
import {
	Animated,
	Dimensions,
	StyleSheet,
	PanResponder,
	PanResponderInstance,
	PanResponderGestureState,
	Text,
	View,
	GestureResponderEvent,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const SLIDE_TIMING = 1000;
const SWIPE_THRESHOLD = WIDTH * 0.10;
let index = 0;
let lastPosition = 0;

interface ISlideProps {
	slides: JSX.Element[];
}

interface ISlideState {
	position: Animated.ValueXY;
	panResponder: PanResponderInstance;
}

interface SlideGrid {
	slide: JSX.Element;
	left: number;
}

enum Direction {
	RIGHT = 1,
	LEFT = -1,
}

export class Slide extends Component<ISlideProps, ISlideState> {

	constructor(props: ISlideProps) {
		super(props);
		const position = new Animated.ValueXY();
		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: (
				event: GestureResponderEvent,
				gesture: PanResponderGestureState,
			) => {
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
			onPanResponderRelease: (
				event: GestureResponderEvent,
				gesture: PanResponderGestureState,
			) => {
				const { slides } = this.props;

				if (gesture.dx <= -SWIPE_THRESHOLD && index !== (slides.length -1)) {
					this.moveSlide({ x: - WIDTH * ++index, y: 0 });
				}

				if (gesture.dx >= SWIPE_THRESHOLD && index !== 0) {
					this.moveSlide({ x: - WIDTH * --index, y: 0 });
				}

				this.moveSlide({ x: - WIDTH * index, y: 0 });
				lastPosition = - WIDTH * index;
			},
		})
		this.state = {
			position,
			panResponder,
		};
	}

	noSlide = (): JSX.Element => (
		<View style={styles.noSlideStyle}>
			<Text>No slides available</Text>
		</View>
	);

	moveSlide = (toValue: { x: number; y: number }) => {
		Animated.timing(this.state.position, {
			toValue,
			duration: SLIDE_TIMING,
		}).start();
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
				</View>
			)
		});

		return (
			<Animated.View
				style={{
					flex: 1,
					flexDirection: 'row',
					transform: [{ translateX: position.x }],
				}}
				{...panResponder.panHandlers}
			>
				{slidesPanel}
			</Animated.View>
		);
	};

	render() {
		return (
			<>
				{this.renderSlides()}
			</>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	noSlideStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
