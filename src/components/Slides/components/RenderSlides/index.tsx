import React from 'react';
import {
	Animated,
	PanResponderInstance,
	StyleSheet,
	Text,
	View,
} from 'react-native';

interface IRenderSlideProps {
	height?: number;
	width?: number;
	slides: (JSX.Element | null)[];
	position: Animated.ValueXY;
	panResponder: PanResponderInstance;
}

export const RenderSlides = (props: IRenderSlideProps): JSX.Element => {
	const { slides, width, height, panResponder, position } = props;
	const slidesPanel: JSX.Element[] = [];

	if (!slides.length)
		<View style={styles.noSlideStyle}>
			<Text>No slides available</Text>
		</View>;

	slides.map((slide, slideIndex: number) => {
		slidesPanel.push(
			<View key={slideIndex} style={{ top: 0, height, width }}>
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

const styles = StyleSheet.create({
	noSlideStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
