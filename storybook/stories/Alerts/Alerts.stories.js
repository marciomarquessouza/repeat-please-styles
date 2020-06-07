import React, { useState } from 'react';
import { Button } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import { Alerts } from '../../../src/components';

const AlertExample = ({ message, type }) => {
	const [showAlert, setShowAlert] = useState(false);
	return (
		<>
			<Alerts
				{...{
					type,
					message,
					shown: showAlert,
					onCloseModal: () => setShowAlert(false),
				}}
			/>
			<Button title="Call Alert" onPress={() => setShowAlert(true)} />
		</>
	);
};

storiesOf('Alerts Message', module)
	.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
	.add('Alerts | Error', () => (
		<AlertExample type="error" message="No Connection =[" />
	))
	.add('Alerts | Warning', () => (
		<AlertExample type="warning" message="No Selected Word" />
	))
	.add('Alerts | Success', () => (
		<AlertExample type="success" message="Yeep =]" />
	))
	.add('Alerts | Wrap Text', () => (
		<AlertExample
			type="success"
			message="How many roads must a man walk down Before you call him a man? How many seas must a white dove sail Before she sleeps in the sand? Yes, 'n' how many times must the cannon balls fly Before they're forever banned? The answer, my friend, is blowin' in the wind The answer is blowin' in the wind"
		/>
	));
