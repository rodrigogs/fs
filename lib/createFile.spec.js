const mockFs = require('../test/mock/fs');
const readFile = require('./readFile');
const createFile = require('./createFile');

beforeEach(() => {
  mockFs.create();
});

afterEach(() => {
  mockFs.destroy();
});

describe('createFile', () => {

  it('should create the specified file with the specified content', async () => {
    const file = '/somedir/newfile';
    const content = 'I was created by a test 🤖';

    await createFile(file, content);

    const fileContent = await readFile(file);
    expect(fileContent).toBe(content);
  });

  it('should create the specified file with empty content', async () => {
    const file = '/somedir/newfile';

    await createFile(file);

    const fileContent = await readFile(file);
    expect(fileContent).toBe('');
  });

});
