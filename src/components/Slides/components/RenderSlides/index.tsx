import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

interface IRenderSlideProps {
	height?: number;
	width: number;
	slides: (JSX.Element | null)[];
	position: Animated.ValueXY;
}

export const RenderSlides = (props: IRenderSlideProps): JSX.Element => {
	const { slides, width, height, position } = props;
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
				width: 3 * width,
				flexDirection: 'row',
				transform: [{ translateX: position.x }],
			}}>
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
