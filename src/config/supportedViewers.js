const googleBaseUrl = 'https://docs.google.com/';
const baseOptions = {
  embedded: {
    key: 'embedded',
    options: [true, false],
  },
  url: {
    key: 'url',
    required: true,
    mustEncode: true,
  },
};

export default {
  default: {
    baseUrl: `${googleBaseUrl}/viewer`,
    options: baseOptions,
  },
  gview: {
    baseUrl: `${googleBaseUrl}/gview`,
    options: baseOptions,
    deprecated: true,
  },
};
