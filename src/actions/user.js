const prefix = "user";

export const LOGGED_GAMESPARKS_REQUEST = `${prefix}_logged_gamesparks_request`;
export const LOGGED_GAMESPARKS_SUCCESSED = `${prefix}_logged_gamesparks_successed`;
export const LOGGED_GAMESPARKS_FAILED = `${prefix}_logged_gamesparks_failed`;

export const CHANGE_NAME_REQUEST = `${prefix}_change_name_request`;
export const CHANGE_NAME_SUCCESSED = `${prefix}_change_name_successed`;
export const CHANGE_NAME_FAILED = `${prefix}_change_name_failed`;

export const changeName = (name) => {
	return (dispatch) => {
		dispatch({
			type: CHANGE_NAME_REQUEST,
			payload: { name },
		});
	}
}
