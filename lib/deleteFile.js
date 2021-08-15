const fs = require('fs');
const path = require('path');

/**
 * Deletes target file.
 *
 * @param {String} filePath Absolute or relative(from working path) file path
 * @returns {Promise<Boolean>} Whether file was deleted
 */
const deleteFile = (filePath) => new Promise(
  (resolve) => fs.unlink(path.resolve(filePath), (err) => {
    if (err) return resolve(false);
    return resolve(true);
  }),
);

module.exports = deleteFile;
