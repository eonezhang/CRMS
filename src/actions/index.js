import { createAction } from 'redux-actions';
import * as types from './types';

export function filterTable(filter) {
	return {
		type: types.FILTER,
		filter
	};
}
export const changeTitle = createAction('CHANGE_TITLE', key => key)
export const changeSwiper = createAction('CHANGE_SWIPER', key => key)