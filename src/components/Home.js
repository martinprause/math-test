import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	wrapper: {
		flex: 1,
	},
	welcomeWrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});


class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { user } = this.props;
		return (
			<View style={styles.welcomeWrapper}>
				<Text>WELCOME {user.displayName}</Text>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.app.user,
	}
}

export default connect(mapStateToProps)(withRouter(Home));