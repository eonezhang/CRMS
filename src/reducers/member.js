const member = (state = {
	review: {

	},
	all: {

	}
}, action) => {
	let { type, payload: data } = action;
	switch (type) {
		case 'GET_MEMBER_REVIEW':
			console.log(data)
			return Object.assign({}, state, {
				review:data
			});
		case 'GET_MEMBER_ALL':
			console.log(data)
			return state;
		default:
			return state;
	}
}
export default member;