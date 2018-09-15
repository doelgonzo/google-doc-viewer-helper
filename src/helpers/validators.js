import { getFileExtension } from '../utils/generic.utils';
import { supportedFormats } from '../config/index';

const { hasOwnProperty } = Object.prototype;

const isSupportedFormat = (toVerify) => {
  let toVerifyCopy = toVerify ? toVerify.toLowerCase() : '';
  if (toVerifyCopy.indexOf('.') !== -1) {
    toVerifyCopy = getFileExtension(toVerifyCopy);
  }

  return hasOwnProperty.call(supportedFormats, toVerifyCopy);
};

export default {
  isSupportedFormat,
};
