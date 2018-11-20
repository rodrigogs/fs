const mockFs = require('../test/mock/fs');
const readFile = require('./readFile');

beforeEach(() => {
  mockFs.create();
});

afterEach(() => {
  mockFs.destroy();
});

describe('readFile', () => {

  it('should read specified file content', async () => {
    const fileContent = await readFile('/somedir/somefile');
    expect(fileContent).toBe('I\'m a file!');
  });

});
