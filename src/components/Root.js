import React from 'react';
import {StyleSheet, View} from 'react-native';
import { NativeRouter } from 'react-router-native';

import {Provider} from 'react-redux'

const styles = StyleSheet.create({
	wrapper: {
		flex: 1
	}
});

const Root = ({store, children}) => <NativeRouter>
	<View style={styles.wrapper}>
		<Provider store={store}>
			{children}
		</Provider>
	</View>
</NativeRouter>

export default Root;