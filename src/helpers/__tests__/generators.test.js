import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import pick from 'lodash/pick';

import generators from '../generators';

const testUrl = 'http://www.fakeurl.com/myTest.pdf';
const validGoogleDocUrl = 'https://docs.google.com/viewer?embedded=true&url=http%3A%2F%2Fwww.fakeurl.com%2FmyTest.pdf';
const validGoogleDocUrlWithGView = 'https://docs.google.com/gview?embedded=true&url=http%3A%2F%2Fwww.fakeurl.com%2FmyTest.pdf';
const validGoogleDocUrlSomeParam = 'https://docs.google.com/viewer?embedded=true&url=http%3A%2F%2Fwww.fakeurl.com%2FmyTest.pdf&someParam=42';
const noopFn = () => {};

describe('generator utils', () => {
  chai.use(sinonChai);

  let params;

  beforeEach(() => {
    params = {
      embedded: true,
      url: testUrl,
    };
  });

  it('can generate valid google doc urls', () => {
    expect(generators.generateGoogleDocUrlWithParams(params)).to.equal(validGoogleDocUrl);
  });

  it('can generate valid google doc urls using a viewer override, and throw an warning (once) if it is a deprecated viewer', () => {
    console.warn = noopFn;
    sinon.spy(console, 'warn');
    expect(generators.generateGoogleDocUrlWithParams(params, 'gview')).to.equal(validGoogleDocUrlWithGView);
    expect(console.warn).to.have.been.calledOnce.valueOf();
  });

  it('should fall back to default viewer if specified viewer does not exist. An error should be logged (once).', () => {
    console.warn = noopFn;
    sinon.spy(console, 'warn');
    expect(generators.generateGoogleDocUrlWithParams(params, 'imaginaryViewer')).to.equal(validGoogleDocUrl);
    expect(console.warn).to.have.been.calledOnce.valueOf();
  });

  it('should handle unrecognized params by appending them to the url', () => {
    params.someParam = 42;
    expect(generators.generateGoogleDocUrlWithParams(params)).to.equal(validGoogleDocUrlSomeParam);
  });

  it('should complain about not having a url to create a valid google doc URL with (triggers one console error)', () => {
    console.error = noopFn;
    sinon.spy(console, 'error');
    generators.generateGoogleDocUrlWithParams(pick(params, 'embedded'));
    expect(console.error).to.have.been.calledOnce.valueOf();
  });

  it('can generate valid embedded google doc urls without having to specify a params object', () => {
    expect(generators.generateEmbeddedGoogleDocUrl(testUrl)).to.equal(validGoogleDocUrl);
  });

  it('should warn the user passing params that will overwrite default embedding params (triggers two console warnings)', () => {
    console.warn = noopFn;
    sinon.spy(console, 'warn');
    generators.generateEmbeddedGoogleDocUrl(testUrl, params);
    expect(console.warn).to.have.been.calledTwice.valueOf();
  });
});
