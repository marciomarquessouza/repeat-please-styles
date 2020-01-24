import React, { Component } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'

export interface ICircularProgressProps {
	radius: number;
}

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const SemiCircle = styled.View`
	width: 100px;
	height: 100px;
	border-radius: 25px;
	border-width: 20px;
	border-top-color: red;
	border-right-color: red;
	border-bottom-color: transparent;
	border-left-color: transparent;
	transform: rotateZ(-45deg);
`;

export class CircularProgress extends Component <ICircularProgressProps, {}> {
	render() {
		const { radius } = this.props;
		return (
			<Container>
				<Text>Circle Here</Text>
				<SemiCircle />
			</Container>
		);
	}
}
