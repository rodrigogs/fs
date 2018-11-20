const fs = require('fs');
const path = require('path');

/**
 * Deletes target file.
 *
 * @param {String} filePath Absolute or relative(from working path) file path
 * @returns {Promise<void>}
 */
const deleteFile = filePath => new Promise((resolve, reject) => {
  fs.unlink(path.resolve(filePath), (err) => {
    if (err) return reject(err);
    return resolve();
  });
});

module.exports = deleteFile;
