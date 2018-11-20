const mock = require('mock-fs');

const create = () => {
  mock({
    '/somedir/': {
      somefile: 'I\'m a file!',
      anotherdir: {
        anotherfile: 'I\'m another file!',
        'package.json': JSON.stringify({
          name: 'Mocked package',
          scripts: {
            test: 'I\'m a test script',
          },
        }),
      },
    },
  });
};

const destroy = () => {
  mock.restore();
};

module.exports = {
  create,
  destroy,
};
