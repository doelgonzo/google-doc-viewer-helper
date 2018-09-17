import { generateUrl } from '../utils/generic.utils';
import { supportedViewers } from '../config/index';
import validators from './validators';

const { hasOwnProperty } = Object.prototype;

const getBadParamsMessage = badParam => `Parameter "${badParam}" will override default embed params.`;

const generateGoogleDocUrlWithParams = (params, viewerOverride) => {
  const viewer = supportedViewers[viewerOverride] || supportedViewers.default;
  if (!validators.isSupportedFormat(params.url)) {
    console.error('Invalid parameter "url", Google doc will still be returned but may yield unexpected results.');
  }
  if (viewer.isDeprecated) {
    console.warn(`'${viewerOverride}' is deprecated.`);
  }
  if (viewerOverride && (!hasOwnProperty.call(supportedViewers, viewerOverride))) {
    console.warn(`'${viewerOverride}' is unsupported. Default viewer will be used.`);
  }

  return generateUrl(viewer.baseUrl, params);
};

const generateEmbeddedGoogleDocUrl = (urlToEmbed, additionalParams, viewerOverride) => {
  if (additionalParams) {
    if (hasOwnProperty.call(additionalParams, 'url')) {
      console.warn(getBadParamsMessage('url'));
    }
    if (hasOwnProperty.call(additionalParams, 'embedded')) {
      console.warn(getBadParamsMessage('embedded'));
    }
  }

  const defaultParams = {
    embedded: true,
    url: urlToEmbed,
  };
  const allParams = Object.assign({}, defaultParams, additionalParams);

  return generateGoogleDocUrlWithParams(allParams, viewerOverride);
};

export default {
  generateEmbeddedGoogleDocUrl,
  generateGoogleDocUrlWithParams,
};
