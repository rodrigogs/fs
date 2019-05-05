const fs = require('fs');
const path = require('path');

const deleteFile = require('./deleteFile');
const listDirFiles = require('./listDirFiles');
const getFileInfo = require('./getFileInfo');

/**
 * Deletes target directory.
 *
 * @param {String} dirPath Absolute or relative(from working path) file path
 * @returns {Promise<void>}
 */
const deleteDir = dirPath => new Promise(async (resolve, reject) => {
  try {
    const files = await Promise.all((await listDirFiles(dirPath)).map(file => getFileInfo(`${dirPath}/${file}`)));
    if (files.length) {
      await Promise.all(files.map((file) => {
        if (file.isDirectory()) return deleteDir(file.absolute);
        return deleteFile(file.absolute);
      }));
    }

    fs.rmdir(path.resolve(dirPath), (err) => {
      if (err) return reject(err);
      return resolve();
    });
  } catch (err) {
    reject(err);
  }
});

module.exports = deleteDir;
