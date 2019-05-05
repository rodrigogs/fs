const mockFs = require('../test/mock/fs');
const fileExists = require('./fileExists');
const deleteFile = require('./deleteFile');

beforeEach(() => {
  mockFs.create();
});

afterEach(() => {
  mockFs.destroy();
});

describe('deleteFile', () => {
  it('should successfully deletes the specified file', async () => {
    const file = '/somedir/somefile';

    let exists = await fileExists(file);
    expect(exists).toBe(true);

    await deleteFile('/somedir/somefile');

    exists = await fileExists('/somedir/somefile');
    expect(exists).toBe(false);
  });

  it('should fail when trying to delete a directory', async () => {
    const dir = '/somedir';

    await expect(deleteFile(dir)).rejects.toThrowError(`EPERM, UV_EPERM '${dir}'`);
  });
});
