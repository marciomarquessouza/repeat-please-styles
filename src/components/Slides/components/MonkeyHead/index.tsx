import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MonkeyHeadSVG } from './SVG';

interface IMonkeyHeadProps {
	index: number;
	height: number;
	onPress?: () => void;
}

export const MonkeyHead = (props: IMonkeyHeadProps): JSX.Element => {
	const [index, setIndex] = useState(props.index);

	useEffect(() => setIndex(props.index), [props.index]);

	const { height, onPress } = props;
	const monkeyHeadSize = { width: 252, height: 280 };
	const top = height / 2 - monkeyHeadSize.height / 2 - 30;

	return (
		<View style={[styles.monkeyHeadDesign, { top }]}>
			<TouchableOpacity onPress={onPress} activeOpacity={1}>
				<MonkeyHeadSVG
					height={monkeyHeadSize.height}
					width={monkeyHeadSize.width}
					index={index}
				/>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	monkeyHeadDesign: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		position: 'absolute',
	},
});
