const fs = require('fs');

/**
 * @param {String} filePath Absolute or relative(from working path) file path
 * @param {Object} options `fs.readFile`'s `options`
 * @returns {Promise<String>} File content
 */
const readFile = (filePath, options = {}) => new Promise((resolve, reject) => {
  fs.readFile(filePath, options, (err, content) => {
    if (err) return reject(err);
    return resolve(content.toString());
  });
});

module.exports = readFile;
