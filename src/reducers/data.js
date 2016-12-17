const data = (state = {
	trial:{

	},
	member:{

	}
}, action) => {
	let { type, payload: data } = action;
	switch (type) {
		case 'GET_NEWDATA':
			console.log(data)
		default:
			return state;
	}
}
export default data;