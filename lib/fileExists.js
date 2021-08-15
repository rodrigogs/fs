const fs = require('fs');
const path = require('path');

/**
 * Checks if target file exists.
 *
 * @param {String} filePath Absolute or relative(from working path) file path
 * @returns {Promise<Boolean>}
 */
const fileExists = (filePath) => new Promise((resolve) => {
  fs.access(path.resolve(filePath), fs.constants.F_OK, (err) => resolve(!err));
});

module.exports = fileExists;
