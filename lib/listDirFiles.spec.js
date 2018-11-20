const mockFs = require('../test/mock/fs');
const listDirFiles = require('./listDirFiles');

beforeEach(() => {
  mockFs.create();
});

afterEach(() => {
  mockFs.destroy();
});

describe('listDirFiles', () => {

  it('should list directory files', async () => {
    const files = await listDirFiles('/somedir');
    expect(files).toBeInstanceOf(Array);
  });

});
