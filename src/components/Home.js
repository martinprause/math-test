import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { View, Text } from 'react-native'

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Text>WELCOME DENIS</Text>
			</View>
		)
	}
}

export default withRouter(Home);