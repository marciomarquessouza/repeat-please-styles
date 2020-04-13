import React from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { IconsIPA } from '../../../src/components';
import { IPA } from '../../../src/utils/IPA';

storiesOf('IPA Icons', module)
.add('Icons', () => (
	<View style={styles.container}>
		<Text style={styles.titleStyle}>IPA Vowels:</Text>
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			data={Object.values(IPA)}
			keyExtractor={(IPA) => IPA.symbol}
			renderItem={({ item: { symbol, type, examples } }) => (
				<View style={styles.symbolContainer}>
					<IconsIPA { ...{ symbol, type } } />
					<View style={styles.examplesContainer}>
						<Text style={styles.exampleStyle}>
							{examples.join(', ')}
						</Text>
					</View>
				</View>
			)}
		/>
	</View>
))

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
	},
	symbolContainer: {
		marginHorizontal: 6,
		marginVertical: 8,
	},
	examplesContainer: {
		alignItems: 'center',
		marginVertical: 6,
	},
	exampleStyle: {
		fontSize: 12,
	},
});
