const path = require('path');
const conditionalRace = require('conditional-race');
const listDirFiles = require('./listDirFiles');
const getFileInfo = require('./getFileInfo');

const _findFile = async (conditionalFunction, dir = process.cwd(), options = {}) => {
  const opts = {
    excludes: [],
    depth: -1,
    backward: false,
    ...options,
  };

  const dirFiles = await listDirFiles(dir)
    .then((files) => files
      .filter((file) => opts.excludes.indexOf(file) === -1)
      .map((file) => path.resolve(dir, file)))
    .then((files) => Promise.all(files.map(getFileInfo)));

  let file = dirFiles.find(conditionalFunction);
  if (file) return file;

  if (opts.depth !== 0) {
    const nextOpts = Object.assign(opts, {
      depth: (opts.depth !== -1) ? opts.depth - 1 : -1,
    });

    if (opts.backward) {
      const backwardDir = path.dirname(dir);
      if (backwardDir === dir) return null;

      return _findFile(conditionalFunction, backwardDir, nextOpts);
    }

    const dirs = dirFiles.filter((f) => f.isDirectory());
    if (!dirs.length) return null;

    file = await conditionalRace(dirs
      .map((d) => _findFile(conditionalFunction, d.absolute, nextOpts)), conditionalFunction);
    if (file) return file;
  }

  return null;
};

/**
 * Finds the first file to match with the conditional function.
 *
 * @param {String|Function} fileNameOrConditionalFunction
 * @param {String} [dir = process.cwd()]
 * @param {Object} [options = {}]
 * @param {String[]} [options.excludes = []]
 * @param {Number} [options.depth = -1]
 * -1   = Fully recursive
 * 0    = Non recursive
 * 1... = To depth
 * @param {Boolean} [options.backward = false]
 * @returns {Promise<null|Object>}
 */
const findFile = async (fileNameOrConditionalFunction, dir = process.cwd(), options) => {
  if (typeof fileNameOrConditionalFunction === 'string') {
    return _findFile((file) => file && file.name === fileNameOrConditionalFunction, dir, options);
  }
  if (typeof fileNameOrConditionalFunction === 'function') {
    return _findFile(fileNameOrConditionalFunction, dir, options);
  }
  return null;
};

module.exports = findFile;
