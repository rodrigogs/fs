const fs = require('fs');
const path = require('path');

/**
 * @param {String} dir
 * @returns {Promise<String[]>} Files list
 */
const listDirFiles = (dir) => new Promise((resolve, reject) => {
  fs.readdir(path.resolve(dir), (err, files) => {
    if (err) return reject(err);
    return resolve(files);
  });
});

module.exports = listDirFiles;
