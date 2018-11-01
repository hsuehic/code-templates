/**
 * {__name__}.jsx
 * @author: {__author__}({__email__})
 * @link: {__link__}
 * @date: {__date__}
 */

import { getList, create, remove, update } from '@/services/{__name__}';

export default {
  namespace: '{__name__}',
  state: {
    list: [],
    pageIndex: 1,
    pageSize: 10,
    keywords: ''
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(getList, payload);
      yield put({
        type: 'save',
        payload: {
          response
        }
      });
    },

    *create({ payload }, { call }) {
      const response = yield call(create, payload);
      return response;
    },

    *update({ payload }, { call }) {
      const response = yield call(update, payload);
      return response;
    },

    *remove({ payload }, { call }) {
      const response = yield call(remove, payload);
      return response;
    }
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
