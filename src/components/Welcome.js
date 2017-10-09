import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { changeName } from '../actions/user';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	wrapper: {
		flex: 1,
	},
	textWrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	formWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	usernameInput: {
		height: 40,
		width: '70%',
		borderColor: 'gray',
		borderWidth: 1,
		margin: 10,
	},
	startBtn: {
		width: '40%',
		height: 44,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 8,
		marginTop: 40,
		justifyContent: 'center',
		backgroundColor: '#48B5E2',
	}
});

class Welcome extends Component {
	state = {
		userName: '',
	};

	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		var { history, user } = nextProps;

		if (user.displayName !== undefined) {
			history.replace('/home')
		}
	}

	renderUserCreationName = () => {
		const { userName } = this.state;
		return (
			<View style={styles.formWrapper}>
				<Text>Please enter your name</Text>
				<TextInput
					style={styles.usernameInput}
					onChangeText={(userName) => this.setState({ userName })}
					value={userName}
				/>
				<TouchableOpacity
					style={styles.startBtn}
					onPress={() => this.props.changeName(userName)}
				>
					<Text style={{ color: 'white' }}>Start</Text>
				</TouchableOpacity>
			</View>
		);
	};

	renderLoadingText = () => {
		return (
			<View style={styles.textWrapper}>
				<Text>LOADING...</Text>
			</View>
		);
	}

	renderORredirect = () => {
		const { fetchingGamesparkReauest, user } = this.props;

		if (fetchingGamesparkReauest) {
			return this.renderLoadingText();
		} else if (user.displayName === undefined) {
			return this.renderUserCreationName();
		} else {
			return (
				<View style={styles.textWrapper}>
					<Text>Wow! Something went wrong!</Text>
				</View>
			);
		}
	}

	render() {
		return (
			<View style={styles.wrapper}>
				{ this.renderORredirect() }
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		fetchingGamesparkReauest: state.app.fetchingGamesparkReauest,
		user: state.app.user,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		changeName: (name) => changeName(name)(dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Welcome));