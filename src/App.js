import React from 'react';
import logger from 'redux-logger';
import { View } from 'react-native';
import rootReducer from './reducers';
import Root from './components/Root';
import rootSaga from './reducers/saga';
import Routes from './navigation/Routes';
import createSagaMiddleware from 'redux-saga'
import {createStore, applyMiddleware} from 'redux';
import EStyleSheet from 'react-native-extended-stylesheet';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);
EStyleSheet.build();

const styles = EStyleSheet.create({
	wrapper: {
		flex: 1
	}
});

const App = () => <Root store={store}>
	<View style={styles.wrapper}>
		<Routes/>
	</View>
</Root>

export default App;