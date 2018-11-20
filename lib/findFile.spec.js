const mockFs = require('../test/mock/fs');
const findFile = require('./findFile');

beforeEach(() => {
  mockFs.create();
});

afterEach(() => {
  mockFs.destroy();
});

describe('findFile', () => {
  it('should find the specified file inside thee specified dir', async () => {
    const found = await findFile('anotherfile', '/somedir');
    expect(found).toBeInstanceOf(Object);
  });

  it('should not find the specified file inside thee specified dir', async () => {
    const found = await findFile('invalidfile', '/somedir');
    expect(found).toBeNull();
  });
});
