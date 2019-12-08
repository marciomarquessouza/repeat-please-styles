import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, View } from 'react-native';
import style from './style';

export default function CenterView({ children }) {
	return (
		<KeyboardAvoidingView style={style.main} behavior="padding" enabled>
			<View>{children}</View>
		</KeyboardAvoidingView>
	);
}

CenterView.defaultProps = {
	children: null,
};

CenterView.propTypes = {
	children: PropTypes.node,
};
