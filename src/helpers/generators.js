import merge from 'lodash/merge';
import has from 'lodash/has';

import { generateUrl } from '../utils/generic.utils';
import { supportedViewers } from '../config/index';
import validators from './validators';

const getBadParamsMessage = badParam => `Parameter "${badParam}" was passed in with params object, you may obtain unexpected results`;

const generateGoogleDocUrlWithParams = (params, viewerOverride) => {
  const viewer = supportedViewers[viewerOverride] || supportedViewers.default;
  if (!validators.isSupportedFormat(params.url)) {
    console.error('Invalid parameter "url", Google doc will still be returned but may yield unexpected results.');
  }

  return generateUrl(viewer.baseUrl, params);
};

const generateEmbeddedGoogleDocUrl = (urlToEmbed, additionalParams, viewerOverride) => {
  if (has(additionalParams, 'url')) {
    console.warn(getBadParamsMessage('url'));
  }
  if (has(additionalParams, 'embedded')) {
    console.warn(getBadParamsMessage('embedded'));
  }

  const defaultParams = {
    embedded: true,
    url: urlToEmbed,
  };
  const allParams = merge({}, defaultParams, additionalParams);

  return generateGoogleDocUrlWithParams(allParams, viewerOverride);
};

export default {
  generateEmbeddedGoogleDocUrl,
  generateGoogleDocUrlWithParams,
};
