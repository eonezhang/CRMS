const member = (state = {
	review: {},
	all: {}
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
		case 'DEL_DATA':
			console.log(data)
			if(data.type===1){
				let ndata = state.review.data;
				ndata.splice(data.index, 1)
				return Object.assign({}, state,	{
					review: {
						data:ndata
					}
				})
			}
			return state
		default:
			return state;
	}
}
export default member;