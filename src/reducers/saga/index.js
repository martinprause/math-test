import {delay} from 'redux-saga';
import {eventChannel} from 'redux-saga';
import {put, take, takeEvery, all, select, call, fork} from 'redux-saga/effects';
import {showImagePicker} from 'react-native-image-picker';
import {getUser} from '../app';

import * as userActions from '../../actions/user';
import * as userSaga from './user';

const options = {
    title: 'Select Avatar',
    mediaType: 'photo',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

export default function * rootSaga() {
    yield all([
        authSaga(),
        bindUserActions(),
    ])
}

function * authSaga() {
    yield put({type: userActions.LOGGED_GAMESPARKS_REQUEST});
    const result = yield call(userSaga.DeviceAuthenticationReques);

    if (result.authToken !== undefined) {
        const user = yield call(userSaga.AccountDetailsRequest, result);
        if (user.scriptData !== undefined && user.scriptData.avatarId !== undefined ) {
            const uploaded = yield call(userSaga.GetUploadedRequest, user);
            user.scriptData['avatarUrl'] = uploaded.url;
        }
        yield put({type: userActions.LOGGED_GAMESPARKS_SUCCESSED, payload: user});
    } else {
        yield put({type: userActions.LOGGED_GAMESPARKS_FAILED, payload: user});
    }
}

function * changeName({payload}) {
    const result = yield call(userSaga.ChangeUserDetailsRequest, payload);

    if (result) {
        const user = yield call(userSaga.AccountDetailsRequest);
        yield put({type: userActions.CHANGE_NAME_SUCCESSED, payload: user});
    } else {
        yield put({type: userActions.CHANGE_NAME_FAILED, payload: error});
    }
}

function * changeAvatar() {
    let user = yield select(getUser);
    const uploadURL = yield call(userSaga.GetUploadUrlRequest, user);
    const imageData = yield getImage();
    const response = yield call(storeImage, uploadURL, imageData);
    if (response.status === 200) {
        user = yield call(userSaga.AccountDetailsRequest);
        const uploaded = yield call(userSaga.GetUploadedRequest, user);
        user.scriptData['avatarUrl'] = uploaded.url;
        yield put({type: userActions.CHANGE_AVATAR_SUCCESSED, payload: user});
    }
}

function getImage() {
    return new Promise(resolve => {
        showImagePicker(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                resolve(response);
            }
        });
    });
}

function * storeImage(uploadURL, imageData) {
    const formData = new FormData();
    formData.append("file", {
        uri: imageData.uri,
        type: "multipart/form-data",
        name: imageData.fileName
    });

    return yield fetch(uploadURL.url, {
        method: "post",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        body: formData
    })
        .then(response => {
            return response
        })
        .catch(error => {
            return error
        });
}

function * bindUserActions() {
    yield takeEvery(userActions.CHANGE_NAME_REQUEST, changeName);
    yield takeEvery(userActions.CHANGE_AVATAR_REQUEST, changeAvatar);
}
