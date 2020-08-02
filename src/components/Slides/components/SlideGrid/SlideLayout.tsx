import React from 'react';
import { Animated, PanResponderInstance, View } from 'react-native';
import { RenderSlides } from '../RenderSlides';
import { MonkeyHeadSlide } from '../MonkeyHeadSlide';
import { SkipButton } from '../SkipButton';
import { Slider } from '../Slider';
import { styles } from './style';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ISlide } from './types';

interface ISlideLayoutProps {
	index: number;
	nextScreen: () => void;
	nextSlide: () => void;
	panResponder: PanResponderInstance;
	position: Animated.ValueXY;
	previousSlide: () => void;
	slides: ISlide[];
	width: number;
}

export const SlideLayout = ({
	index,
	nextScreen,
	nextSlide,
	panResponder,
	position,
	previousSlide,
	slides,
	width,
}: ISlideLayoutProps) => (
	<View style={styles.wrapper}>
		<SkipButton onSkip={nextScreen} style={styles.skipContainer} />
		<Animated.View
			style={[styles.slideContainer]}
			{...panResponder.panHandlers}>
			<View style={styles.headerSlideContainer}>
				<RenderSlides
					{...{
						slides: slides.map(slide => slide.header),
						position,
						width,
					}}
				/>
			</View>
			<View style={[styles.middleSlideContainer, { zIndex: -10 }]}>
				<MonkeyHeadSlide
					{...{
						index,
						height: hp('30%'),
						onPress: nextSlide,
					}}
				/>
			</View>
			<View style={styles.botomSlideContainer}>
				<RenderSlides
					{...{
						slides: slides.map(slide => slide.footer),
						position,
						width,
					}}
				/>
			</View>
		</Animated.View>
		<View style={styles.sliderContainer}>
			<Slider
				slideTotal={slides.length}
				index={index}
				onBack={previousSlide}
				onNext={nextSlide}
				onLetStart={nextScreen}
			/>
		</View>
	</View>
);
