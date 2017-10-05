import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { View, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent:'center',
	}
});

class Welcome extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<Text>LOADING...</Text>
			</View>
		)
	}
}

export default withRouter(Welcome);