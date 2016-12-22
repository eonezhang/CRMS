import { createAction } from 'redux-actions';

export const getNewdata = createAction('GET_NEWDATA', value => value);
export const getMemberReview = createAction('GET_MEMBER_REVIEW', value => value);
export const getMemberAll = createAction('GET_MEMBER_ALL', value => value);

export const delData = createAction('DEL_DATA', (type,index,result) => ({type,index,result}));
