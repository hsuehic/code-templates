/**
 * {__name__}.jsx
 * @author: {__author__}({__email__})
 * @link: {__link__}
 * @date: {__date__}
 */

import request, { toQueryString } from '@/utils/request';

const baseUrl = '/api/{__name__}';

export async function getList(query) {
  let url = baseUrl;
  const queryString = toQueryString(query);
  if (queryString) {
    url = `${baseUrl}?${queryString}`;
  }
  return request(url);
}

export async function create(payload) {
  return request(baseUrl, {
    method: 'POST',
    body: payload
  });
}

export async function remove(id) {
  return request(`${baseUrl}/${id}`, {
    method: 'DELETE'
  });
}

export async function update(payload) {
  return request(`${baseUrl}/${payload._id}`, {
    method: 'PATCH',
    body: payload
  });
}
