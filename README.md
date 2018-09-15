# google-doc-viewer-helper

Google provides a Doc Viewer that leverages their [Google Docs](https://www.google.com/docs/about/) platform
to show a certain amount of file formats it is compatible with

## Getting Started

```
npm i google-doc-viewer-helper -S
```

Use the utilities in your application in such ways as:
```javascript
import gDocHelper from 'google-doc-viewer-helper';
```

First, to generate a generic Google Doc URL, leverage
`generateGoogleDocUrlWithParams(params, viewerOverride)`

| parameter      | type   | options           | defaultValue | description                                                           |
|----------------|--------|-------------------|--------------|-----------------------------------------------------------------------|
| params         | object | n/a               | null         | All parameters to be used in a Google Doc url                         |
| viewerOverride | string | 'default'/'gview' | 'default'    | Which viewer implementation Google Docs will use to open the document |

```javascript
const testFileUrl = 'http://www.fakeurl.com/myTest.pdf';
/*
 *  Generate a Google doc URL like:
 *  https://docs.google.com/viewer?embedded=true&url=http%3A%2F%2Fwww.fakeurl.com%2FmyTest.pdf
 *  
 *  gDocHelper#generateGoogleDocUrlWithParams(params, viewerOverride)
 */
const myParams = {
    embedded: true,
    url: testUrl,
};
gDocHelper.generateGoogleDocUrlWithParams(myParams);

/*
 *  Shorthand to generate a Google doc URL like:
 *  https://docs.google.com/viewer?embedded=true&url=http%3A%2F%2Fwww.fakeurl.com%2FmyTest.pdf
 *  
 *  gDocHelper#generateEmbeddedGoogleDocUrl(urlToEmbed[, additionalParams][, viewerOverride]) 
 *  
 *  additionalParams: <Object>
 */
gDocHelper.generateEmbeddedGoogleDocUrl(testFileUrl);
...
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
