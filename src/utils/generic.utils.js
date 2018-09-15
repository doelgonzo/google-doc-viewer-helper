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

  const a = filename.toLowerCase().split('.');

  if (a.length === 1 // There were no '.' in the filename
    || (a[0] === '' && a.length === 2) // the first
    || (a[a.length - 1].indexOf('/') !== -1)
  ) {
    return '';
  }
  return a.pop();
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
