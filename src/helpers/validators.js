import has from 'lodash/has';
import includes from 'lodash/includes';

import { getFileExtension } from '../utils/generic.utils';
import { supportedFormats } from '../config/index';

const isSupportedFormat = (toVerify) => {
  let toVerifyCopy = toVerify ? toVerify.toLowerCase() : '';
  if (includes(toVerifyCopy, '.')) {
    toVerifyCopy = getFileExtension(toVerifyCopy);
  }

  return has(supportedFormats, toVerifyCopy);
};

export default {
  isSupportedFormat,
};
