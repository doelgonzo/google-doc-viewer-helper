import { expect } from 'chai';
import {
  getFileExtension,
  isEmpty,
  objectToQueryString,
} from '../generic.utils';

const validTestUrl = 'http://www.fakeurl.com/myTest.pdf';
const encodedQueryString = 'embedded=true&url=http%3A%2F%2Fwww.fakeurl.com%2FmyTest.pdf';

describe('generic utils', () => {
  const paramObj = {
    embedded: true,
    url: validTestUrl,
  };

  it('can check if an object is empty', () => {
    expect(isEmpty(validTestUrl)).to.equal(false);
    expect(isEmpty({ hello: 'world' })).to.equal(false);
    expect(isEmpty({})).to.equal(true);
  });

  it('can handle all types of file extensions and extract them', () => {
    expect(getFileExtension(validTestUrl)).to.equal('pdf');
    expect(getFileExtension('test.png')).to.equal('png');
    expect(getFileExtension('test')).to.equal('');
    expect(getFileExtension(null)).to.equal('');
  });


  it('can convert an object to an encoded query string', () => {
    expect(objectToQueryString(paramObj)).to.equal(encodedQueryString);
  });
});
