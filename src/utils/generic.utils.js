import isEmpty from 'lodash/isEmpty';
import includes from 'lodash/includes';
import last from 'lodash/last';
import map from 'lodash/map';

const objectToQueryString = values => map(values, (value, key) => `${key}=${encodeURIComponent(value)}`).join('&');

const getFileExtension = (filename) => {
  const a = filename.split('.');
  if (a.length === 1 || (a[0] === '' && a.length === 2) || includes(last(a), '/')) {
    return '';
  }
  return a.pop();
};

const generateUrl = (baseUrl, params) => {
  const suffix = !isEmpty(params) ? `?${objectToQueryString(params)}` : '';
  return `${baseUrl}${suffix}`;
};

export {
  generateUrl,
  getFileExtension,
  objectToQueryString,
};
