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
    expect(fileInfo.absolute).toEqual('/somedir/somefile');
    expect(fileInfo.name).toEqual('somefile');
    expect(fileInfo.path).toEqual('/somedir');
    expect(fileInfo.isDirectory).toBeInstanceOf(Function);
    expect(fileInfo.isFile).toBeInstanceOf(Function);
    expect(fileInfo.isSymbolicLink).toBeInstanceOf(Function);
  });
});
