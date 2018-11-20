const mockFs = require('../test/mock/fs');
const fileExists = require('./fileExists');

beforeEach(() => {
  mockFs.create();
});

afterEach(() => {
  mockFs.destroy();
});

describe('fileExists', () => {
  it('should return true when the specified file exists', async () => {
    const exists = await fileExists('/somedir/somefile');
    expect(exists).toBe(true);
  });

  it('should return false when specified file does not exist', async () => {
    const exists = await fileExists('/someinvaliddir/someinvalidfile');
    expect(exists).toBe(false);
  });
});
