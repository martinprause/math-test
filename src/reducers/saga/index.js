import { delay } from 'redux-saga';
import { eventChannel } from 'redux-saga';
import { put, take, takeEvery, all, select, call, fork } from 'redux-saga/effects'

import * as userActions from '../../actions/user';
import * as userSaga from './user';

export default function * rootSaga() {
	yield all([
		authSaga(),
		bindUserActions(),
	])
}

function * authSaga() {
	yield put({type:userActions.LOGGED_GAMESPARKS_REQUEST});
	const user = yield call(userSaga.DeviceAuthenticationReques);

	if (user.authToken !== undefined) {
		yield put({ type: userActions.LOGGED_GAMESPARKS_SUCCESSED, payload: user });
	} else {
		yield put({ type: userActions.LOGGED_GAMESPARKS_FAILED, payload: user });
	}
}

function * changeName({ payload }) {
	const result = yield call(userSaga.ChangeUserDetailsRequest, payload);

	if (result) {
		const user = yield call(userSaga.AccountDetailsRequest);
		yield put({ type: userActions.CHANGE_NAME_SUCCESSED, payload: user });
	} else {
		yield put({ type: userActions.CHANGE_NAME_FAILED, payload: error });
	}
}

function * bindUserActions() {
	yield takeEvery(userActions.CHANGE_NAME_REQUEST, changeName);
}
