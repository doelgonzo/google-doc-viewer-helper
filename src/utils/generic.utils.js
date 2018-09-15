// Speed up access to prototype
const { hasOwnProperty } = Object.prototype;

const objectToQueryString = (toConvert) => {
  const arr = [];
  Object.keys(toConvert).forEach((key) => {
    arr.push(`${key}=${encodeURIComponent(toConvert[key])}`);
  });
  return arr.join('&');
};

const getFileExtension = (filename) => {
  if (!filename) {
    return '';
  }

  if (filename.includes('.')) {
    return filename
      .split('.')
      .pop()
      .split('?') // Remove query params that might be present
      .shift()
      .toLowerCase();
  }
  return '';
};

const isEmpty = (obj) => {
  // null and undefined are "empty"
  if (obj == null) return true;

  // Assume if it has a length property with a non-zero value that property is correct.
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;
  if (typeof obj !== 'object') return true;

  // Note that this doesn't handle toString and valueOf enumeration bugs in IE < 9
  for (const key in obj) { // eslint-disable-line no-restricted-syntax
    if (hasOwnProperty.call(obj, key)) return false;
  }
  return true;
};

const generateUrl = (baseUrl, params) => {
  const suffix = !isEmpty(params) ? `?${objectToQueryString(params)}` : '';
  return `${baseUrl}${suffix}`;
};
export {
  isEmpty,
  generateUrl,
  getFileExtension,
  objectToQueryString,
};
