# google-doc-viewer-helper

Google provides a Doc Viewer that leverages their [Google Docs](https://www.google.com/docs/about/) platform
to show a certain amount of file formats it is compatible with

## Getting Started

```
npm i google-doc-viewer-helper -S
```

Import in your application:
```javascript
import gDocHelper from 'google-doc-viewer-helper';
```

First, to generate a generic Google Doc URL, leverage
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

You can also use shorthand to generate embedded Google doc urls (Most common usecase).
`gDocHelper#generateGoogleDocUrlWithParams(urlToEmbed, viewerOverride)`

| parameter        | type   | options           | defaultValue | description                                                                                 |
|------------------|--------|-------------------|--------------|---------------------------------------------------------------------------------------------|
| urlToEmbed       | string | n/a               | null         | URL to file we wish viewer to open                                                          |
| additionalParams | object | n/a               | null         | Additional parameters for the Google Doc URL <br> (**WARNING**: Can override default params)    |                 
| viewerOverride   | string | 'default'/'gview' | 'default'    | Which viewer implementation Google Docs will use to open the document                       |
```javascript
const testFileUrl = 'http://www.fakeurl.com/myTest.pdf';
gDocHelper.generateEmbeddedGoogleDocUrl(testFileUrl);
// => https://docs.google.com/viewer?embedded=true&url=http%3A%2F%2Fwww.fakeurl.com%2FmyTest.pdf
```

You can also simply check if a specific file format _can_ be opened by Google Docs Viewer

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
We leverage [mocha](https://mochajs.org/) and [chai](http://www.chaijs.com/)for testing, and cover common usecases as 
part of simple unit testing.
```
npm test
```

## Dependencies
* [lodash](https://github.com/lodash/lodash) ~4.7.X
## Authors

* **Doel L Gonzalez** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
