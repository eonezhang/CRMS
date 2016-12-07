const nav = (state = {
	navigator: {
		title: ['首页', '试用管理', '会员管理', '订单管理', '标签管理'],
		swaper: {
			0: null,
			1: ['试用审核', '反馈审核', '全部申请'],
			2: ['餐饮审核', '全部会员'],
			3: null,
			4: null
		}
	}
}, action) => {
	let data = {
		'DEFAULT': state
	}
	return data[action.type || 'DEFAULT'];
}
export default nav;