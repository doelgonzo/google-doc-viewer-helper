# Google Doc Viewer Helper Utils
<a href="https://packagephobia.now.sh/result?p=google-doc-viewer-helper">
  <img src="https://packagephobia.now.sh/badge?p=google-doc-viewer-helper" alt="install size">
</a>
<a href="https://github.com/doelgonzo/google-doc-viewer-helper/blob/master/LICENSE.md">
  <img src="https://img.shields.io/npm/l/google-doc-viewer-helper.svg" alt="license">
</a>
<a href="https://codecov.io/gh/doelgonzo/google-doc-viewer-helper">
  <img src="https://codecov.io/gh/doelgonzo/google-doc-viewer-helper/branch/master/graph/badge.svg" />
</a>
<br>
<br>

Google provides a Doc Viewer that leverages their [Google Docs](https://www.google.com/docs/about/) platform
to show a certain amount of file formats it is compatible with. This library is to ensure we can generate valid Google Doc Viewer URLs, and serves as a utility to know if files are a valid format, that can be leveraged in applications such as ensuring we don't unnecessarily try to route users to an embedded Google Doc Viewer that can't open the file requested anyway.


## Getting Started

```
npm i google-doc-viewer-helper -S
```

Import in your application:
```javascript
import gDocHelper from 'google-doc-viewer-helper';
```
<br><br>
To generate a generic Google Doc URL, leverage

`gDocHelper#generateGoogleDocUrlWithParams(params, viewerOverride)`

| parameter      | type   | options           | defaultValue | description                                                           |
|----------------|--------|-------------------|--------------|-----------------------------------------------------------------------|
| params         | object | n/a               | null         | All parameters to be used in a Google Doc url                         |
| viewerOverride | string | 'default'/'gview' | 'default'    | Which viewer implementation Google Docs will use to open the document |

```javascript
const testFileUrl = 'http://www.fakeurl.com/myTest.pdf';
const myParams = {
    embedded: false,
    url: testUrl,
};
gDocHelper.generateGoogleDocUrlWithParams(myParams);
// => https://docs.google.com/viewer?embedded=false&url=http%3A%2F%2Fwww.fakeurl.com%2FmyTest.pdf

gDocHelper.generateGoogleDocUrlWithParams(myParams, 'gview');
// => https://docs.google.com/gview?embedded=false&url=http%3A%2F%2Fwww.fakeurl.com%2FmyTest.pdf
```
<br><br>
You can also use shorthand to generate embedded Google doc urls (Most common usecase).
`gDocHelper#generateGoogleDocUrlWithParams(urlToEmbed, additionalParams, viewerOverride)`

| parameter        | type   | options           | defaultValue | description                                                                                 |
|------------------|--------|-------------------|--------------|---------------------------------------------------------------------------------------------|
| urlToEmbed       | string | n/a               | null         | URL to file we wish viewer to open                                                          |
| additionalParams | object | n/a               | null         | Additional parameters for the Google Doc URL <br> (**WARNING**: Can override default params)    |                 
| viewerOverride   | string | 'default'/'gview' | 'default'    | Which viewer implementation Google Docs will use to open the document <br> (**WARNING**: 'gview' is deprecated, but supports some special cases. An warning will be written to the console when selecting this viewer.)                       |
```javascript
const testFileUrl = 'http://www.fakeurl.com/myTest.pdf';
gDocHelper.generateEmbeddedGoogleDocUrl(testFileUrl);
// => https://docs.google.com/viewer?embedded=true&url=http%3A%2F%2Fwww.fakeurl.com%2FmyTest.pdf
```
<br><br>
You can also simply check if a specific file format _can_ be opened by Google Docs Viewer
`gDocHelper#isSupportedFormat(urlToValidate)`

| parameter        | type   | description                                                        |
|------------------|--------|--------------------------------------------------------------------|
| urlToValidate    | string | URL to file we wish to validate as being supported by Google docs  |

```javascript
gDocHelper.isSupportedFormat('http://www.fakeurl.com/myTest.pptx');
// => true

gDocHelper.isSupportedFormat('http://www.fakeurl.com/myTest.xlsx');
// => true

gDocHelper.isSupportedFormat('http://www.fakeurl.com/myTest');
// => false

gDocHelper.isSupportedFormat('http://www.fakeurl.com/myTest.bat');
// => false
```


## Running tests
We leverage [mocha](https://mochajs.org/) and [chai](http://www.chaijs.com/) for testing, and cover common usecases as 
part of simple unit testing.
```
npm test
```


## TODO
* ~~Remove lodash dependency~~
* Expose supported formats in case they want to be listed or used elsewhere
* Expose supported viewers and their requirements.
  * Enforce requirements when using these viewers


## Dependencies
NONE!

## Authors

* **Doel L Gonzalez**

## License

This project is licensed under the MIT License
