const member = (state = {
	review: {

	},
	all: {

	}
}, action) => {
	let { type, payload: data } = action;
	switch (type) {
		case 'GET_MEMBER_REVIEW':
			return Object.assign({}, state, {
				review:data
			});
		case 'GET_MEMBER_ALL':
			return Object.assign({}, state, {
				all:data
			});
		default:
			return state;
	}
}
export default member;