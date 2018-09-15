import generators from './helpers/generators';
import validators from './helpers/validators';

const gDocViewHelper = {
  generateGoogleDocUrlWithParams: generators.generateGoogleDocUrlWithParams,
  generateEmbeddedGoogleDocUrl: generators.generateEmbeddedGoogleDocUrl,
  isSupportedFileType: validators.isSupportedFormat,
};

export default gDocViewHelper;
