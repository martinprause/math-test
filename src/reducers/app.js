import * as user from '../actions/user';

const initState = { };

const reducer = (state = initState, action) => {
	switch (action.type) {
		case user.LOGGED_GAMESPARKS_REQUEST: {
			return {...state, fetchingGamesparkReauest: true}
		}
		case user.LOGGED_GAMESPARKS_SUCCESSED: {
			return {...state,
				user: action.payload,
				fetchingGamesparkReauest: false
			}
		}
		case user.LOGGED_GAMESPARKS_FAILED: {
			return {...state,
				user: action.payload,
				fetchingGamesparkReauest: false
			}
		}
		case user.CHANGE_NAME_SUCCESSED: {
			return {...state,
				user: action.payload
			}
		}
		case user.CHANGE_NAME_FAILED: {
			return {...state,
				user: action.payload
			}
		}
		default:
			return state
	}
}

export const getUser = state => state.app.user;

export default reducer