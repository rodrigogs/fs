const mockFs = require('../test/mock/fs');
const getFileInfo = require('./getFileInfo');

beforeEach(() => {
  mockFs.create();
});

afterEach(() => {
  mockFs.destroy();
});

describe('getFileInfo', () => {
  it('should return file information', async () => {
    const fileInfo = await getFileInfo('/somedir/somefile');
    expect(fileInfo).toBeInstanceOf(Object);
  });
});
