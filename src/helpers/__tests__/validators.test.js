import { expect } from 'chai';
import validators from '../validators';
import { getFileExtension } from '../../utils/generic.utils';

const validTestUrl = 'http://www.fakeurl.com/myTest.PDF';
const validTestUrlWithQueryParams = 'http://www.fakeurl.com/myTest.PDF?abc=123';
const invalidTestUrl = 'http://www.fakeurl.com/myTest.bat';
const invalidTestUrlNoExtension = 'http://www.fakeurl.com/myTest';

describe('validator utils', () => {
  it('can validate a file can be opened with Google Docs', () => {
    expect(validators.isSupportedFormat(validTestUrl)).to.equal(true);
  });

  it('can validate a file cannot be opened with Google Docs', () => {
    expect(validators.isSupportedFormat(invalidTestUrl)).to.equal(false);
  });

  it('can handle files with no extension (even though it means it can\'t open in Google Docs)', () => {
    expect(validators.isSupportedFormat(invalidTestUrlNoExtension)).to.equal(false);
  });

  it('can handle files with query parameters and work', () => {
    expect(validators.isSupportedFormat(validTestUrlWithQueryParams)).to.equal(true);
  });
});
