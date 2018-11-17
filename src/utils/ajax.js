import { ajax as ajaxObservable } from 'rxjs/observable/dom/ajax';
import queryString from 'query-string';

import { API_URL } from 'consts';

const ajax = {
  get: (url, params) => (
    ajaxObservable.getJSON(`${API_URL}${params
      ? `${url}?${queryString.stringify(params)}`
      : url}`, setDefaultHeaders())),
};

const setDefaultHeaders = () => ({
  'Content-Type': 'application/json',
});

export default ajax;
