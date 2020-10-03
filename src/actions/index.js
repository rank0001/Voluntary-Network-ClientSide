export const userInfo = (user) => {
	return {
		type: "FETCH_USER",
		payload: user,
	};
};
