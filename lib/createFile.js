const fs = require('fs');
const path = require('path');

/**
 * Writes a file to the given path with the given content.
 *
 * @param {String} filePath Absolute or relative(from working path) file path
 * @param {String} [content = ''] File content
 * @param {Object} [options = {}] `fs.writeFile`'s `options`
 * @returns {Promise<void>}
 */
const createFile = (filePath, content = '', options = {}) => new Promise((resolve, reject) => {
  fs.writeFile(path.resolve(filePath), content, options, (err) => {
    if (err) return reject(err);
    return resolve();
  });
});

module.exports = createFile;
