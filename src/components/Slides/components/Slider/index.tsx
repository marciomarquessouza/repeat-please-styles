import React from 'react';
import {
	Dimensions,
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { color, font } from '../../../../theme';

interface ISliderProps {
	index: number;
	slideTotal: number;
	onBack: () => void;
	onNext: () => void;
	onLetStart?: () => void;
}

const WIDTH = Dimensions.get('window').width;

export const Slider = (props: ISliderProps): JSX.Element => {
	const { index, slideTotal, onBack, onNext, onLetStart } = props;
	const firstSlide = index === 0;
	const lastSlide = index === slideTotal - 1;

	return (
		<View style={styles.slidePosition}>
			<View style={styles.sliderContainer}>
				<TouchableOpacity onPress={onBack} disabled={firstSlide}>
					<Text
						style={[styles.navigatorStyle, { opacity: firstSlide ? 0.3 : 1 }]}>
						BACK
					</Text>
				</TouchableOpacity>
				<View style={styles.indicatorContainer}>
					{Array(slideTotal)
						.fill(0)
						.map((_, slideKey) => (
							<View
								key={slideKey}
								style={[
									styles.circleStyle,
									{ opacity: slideKey === index ? 1 : 0.5 },
								]}
							/>
						))}
				</View>
				{!lastSlide ? (
					<TouchableOpacity onPress={onNext}>
						<Text style={styles.navigatorStyle}>NEXT</Text>
					</TouchableOpacity>
				) : (
					<TouchableOpacity onPress={onLetStart}>
						<Text style={styles.navigatorStyle}>LET'S START</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	slidePosition: {
		position: 'absolute',
		bottom: 40,
		width: WIDTH,
	},
	sliderContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	indicatorContainer: {
		flexDirection: 'row',
	},
	circleStyle: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: color.primary,
		marginHorizontal: 10,
	},
	navigatorStyle: {
		fontFamily: font.title,
		fontSize: 16,
		flexWrap: 'wrap',
		width: 120,
		textAlign: 'center',
	},
});
