import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { color, font } from '../../../../theme';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LabelContext } from '../../';

interface ISliderProps {
	index: number;
	slideTotal: number;
	onBack: () => void;
	onNext: () => void;
	onLetStart?: () => void;
}

export const Slider = ({
	index,
	slideTotal,
	onBack,
	onNext,
	onLetStart,
}: ISliderProps) => {
	const firstSlide = index === 0;
	const lastSlide = index === slideTotal - 1;
	const { backLabel, nextLabel, startLabel } = useContext(LabelContext);

	return (
		<View style={styles.sliderContainer}>
			<TouchableOpacity
				onPress={onBack}
				disabled={firstSlide}
				testID="previousButton">
				<Text
					style={[styles.navigatorStyle, { opacity: firstSlide ? 0.3 : 1 }]}>
					{backLabel}
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
				<TouchableOpacity onPress={onNext} testID="nextButton">
					<Text style={styles.navigatorStyle}>{nextLabel}</Text>
				</TouchableOpacity>
			) : (
				<TouchableOpacity onPress={onLetStart} testID="startButton">
					<Text style={styles.navigatorStyle}>{startLabel}</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	sliderContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		zIndex: 2,
		marginVertical: 2,
	},
	indicatorContainer: {
		flexDirection: 'row',
	},
	circleStyle: {
		width: hp('2%'),
		height: hp('2%'),
		borderRadius: hp('1%'),
		backgroundColor: color.primary,
		marginHorizontal: 10,
	},
	navigatorStyle: {
		fontFamily: font.title,
		fontSize: 16,
		flexWrap: 'wrap',
		width: hp('14%'),
		textAlign: 'center',
	},
});
