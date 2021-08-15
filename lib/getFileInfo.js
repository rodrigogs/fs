const fs = require('fs');
const path = require('path');

/**
 * @param {String} filePath Absolute or relative(from working path) file path
 * @returns {Promise<Object>}
 */
const getFileInfo = (filePath) => new Promise((resolve, reject) => {
  const absolute = path.resolve(filePath);

  fs.lstat(absolute, (err, stats) => {
    if (err) return reject(err);

    return resolve({
      absolute,
      name: path.basename(absolute),
      path: path.dirname(absolute),
      isDirectory: () => stats.isDirectory(),
      isFile: () => stats.isFile(),
      isSymbolicLink: () => stats.isSymbolicLink(),
    });
  });
});

module.exports = getFileInfo;
