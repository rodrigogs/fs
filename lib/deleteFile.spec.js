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

    const deleted = await deleteFile('/somedir/somefile');
    expect(deleted).toBe(true);

    exists = await fileExists('/somedir/somefile');
    expect(exists).toBe(false);
  });

  it('should not fail when trying to delete a directory', async () => {
    const dir = '/somedir';

    await expect(deleteFile(dir)).resolves.toBe(false);
  });
});
