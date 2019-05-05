const mockFs = require('../test/mock/fs');
const filterFile = require('./filterFiles');

beforeEach(() => {
  mockFs.create();
});

afterEach(() => {
  mockFs.destroy();
});

describe('filterFile', () => {
  it('should match every file in the given directory', async () => {
    const found = await filterFile(() => true, '/somedir');
    expect(found.length).toEqual(4);
  });

  it('should not match any file through the function expression', async () => {
    const found = await filterFile(() => false, '/somedir');
    expect(found.length).toEqual(0);
  });

  it('should match the file that corresponds with the given name', async () => {
    const found = await filterFile('anotherfile', '/somedir');
    expect(found.length).toEqual(1);
  });

  it('should not math any file with the given file name', async () => {
    const found = await filterFile('invalidfile', '/somedir');
    expect(found).toEqual([]);
  });
});
