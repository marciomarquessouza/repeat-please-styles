import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { color, font } from '../../../../theme';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface ISliderProps {
	index: number;
	slideTotal: number;
	onBack: () => void;
	onNext: () => void;
	onLetStart?: () => void;
	backLabel?: string;
	nextLabel?: string;
	startLabel?: string;
}

export const Slider = ({
	index,
	slideTotal,
	onBack,
	onNext,
	onLetStart,
	backLabel = 'BACK',
	nextLabel = 'NEXT',
	startLabel = "LET'S START",
}: ISliderProps): JSX.Element => {
	const firstSlide = index === 0;
	const lastSlide = index === slideTotal - 1;

	return (
		<View style={styles.sliderContainer}>
			<TouchableOpacity onPress={onBack} disabled={firstSlide}>
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
				<TouchableOpacity onPress={onNext}>
					<Text style={styles.navigatorStyle}>{nextLabel}</Text>
				</TouchableOpacity>
			) : (
				<TouchableOpacity onPress={onLetStart}>
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
