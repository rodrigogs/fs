const ffs = require('./fs');
const mockFs = require('../test/mock/fs');

beforeEach(() => {
  mockFs.create();
});

afterEach(() => {
  mockFs.destroy();
});

describe('ffs', () => {
  describe('#fileExists()', () => {
    it('should return true when the specified file exists', async () => {
      const exists = await ffs.fileExists('/somedir/somefile');
      expect(exists).toBe(true);
    });

    it('should return false when specified file does not exist', async () => {
      const exists = await ffs.fileExists('/someinvaliddir/someinvalidfile');
      expect(exists).toBe(false);
    });
  });

  describe('#deleteFile()', () => {
    it('should successfully deletes the specified file', async () => {
      const file = '/somedir/somefile';

      let exists = await ffs.fileExists(file);
      expect(exists).toBe(true);

      await ffs.deleteFile('/somedir/somefile');

      exists = await ffs.fileExists('/somedir/somefile');
      expect(exists).toBe(false);
    });
  });

  describe('#createFile()', () => {
    it('should create the specified file with the specified content', async () => {
      const file = '/somedir/newfile';
      const content = 'I was created by a test 🤖';

      await ffs.createFile(file, content);

      const fileContent = await ffs.readFile(file);
      expect(fileContent).toBe(content);
    });
  });

  describe('#readFile()', () => {
    it('should read specified file content', async () => {
      const fileContent = await ffs.readFile('/somedir/somefile');
      expect(fileContent).toBe('I\'m a file!');
    });
  });

  describe('#findFile()', () => {
    it('should find the specified file inside thee specified dir', async () => {
      const found = await ffs.findFile('anotherfile', '/somedir');
      expect(typeof found).toBe('object');
    });

    it('should not find the specified file inside thee specified dir', async () => {
      const found = await ffs.findFile('invalidfile', '/somedir');
      expect(typeof found).toBe('object');
    });
  });
});
