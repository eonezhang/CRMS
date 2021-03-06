import merge from 'lodash/merge'

const nav = (state = {
	navigator: {
		title: ['首页', '试用管理', '会员管理', '订单管理', '标签管理'],
		swiper: {
			0: null,
			1: ['试用审核', '反馈审核', '全部申请'],
			2: ['餐饮审核', '全部会员'],
			3: null,
			4: null
		}
	},
	current: {
		tt: '0',
		swiper: null
	}
}, action) => {
	let {
		type,
		payload: data
	} = action;
	switch (type) {
		case 'CHANGE_TITLE':
			return merge({}, state, {
				current: {
					tt: data
				}
			})
		case 'CHANGE_SWIPER':
			return merge({}, state, {
				current: {
					swiper: data
				}
			})
		default:
			return state;
	}
}
export default nav;