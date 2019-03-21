const mockFs = require('../test/mock/fs');
const fileExists = require('./fileExists');
const deleteDir = require('./deleteDir');

beforeEach(() => {
  mockFs.create();
});

afterEach(() => {
  mockFs.destroy();
});

describe('deleteDir', () => {
  it('should successfully delete the specified directory', async () => {
    const dir = '/somedir';

    let exists = await fileExists(dir);
    expect(exists).toBe(true);

    await deleteDir(dir);

    exists = await fileExists(dir);
    expect(exists).toBe(false);
  });

  it('should fail when trying to delete a file', async () => {
    const file = '/somedir/somefile';

    await expect(deleteDir(file)).rejects.toThrowError(`ENOTDIR, not a directory '${file}'`);
  });
});
