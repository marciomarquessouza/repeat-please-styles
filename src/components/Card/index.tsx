import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { MonkeyHead, Mood } from '../MonkeyHead';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from './style';

interface ICardProps {
	title: string;
	subtitle: string;
	buttonLabel: string;
	onPress: () => void;
}

export const Card = ({
	title,
	subtitle,
	buttonLabel,
	onPress,
}: ICardProps): JSX.Element => (
	<LinearGradient colors={['#EBD935', '#FBEA0D']} style={styles.cardStyle}>
		<View style={styles.leftContainer}>
			<Text style={styles.titleStyle}>{title}</Text>
			<Text style={styles.subTitleStyle}>{subtitle}</Text>
			<TouchableOpacity onPress={onPress}>
				<View style={styles.buttonStyle}>
					<Icon name="ios-play-circle" size={25} color="#656565" />
					<Text style={styles.labelStyle}>{buttonLabel}</Text>
				</View>
			</TouchableOpacity>
		</View>
		<View style={styles.rightContainer}>
			<MonkeyHead mood={Mood.happy} width={hp('11%')} height={hp('11%')} />
		</View>
	</LinearGradient>
);
