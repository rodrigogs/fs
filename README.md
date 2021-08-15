# @rodrigogs/fs
My personal fs wrapper with some advanced features.

[![Build Status](https://travis-ci.com/rodrigogs/fs.svg?branch=master)](https://travis-ci.com/rodrigogs/fs)

## Install
```bash
$ npm install @rodrigogs/fs --save
```

## Usage
```javascript
const fs = require('.');

const fileContent = await fs.readFile('/path/to/file');

const fileExists = await fs.fileExists('/path/to/file');

const fileInfo = await fs.getFileInfo('/relative/to/filename');

const fileFound = await fs.findFile('fileName.foo');

const filteredFile = await fs.filterFiles('filename.foo');

const dirFiles = await fs.listDirFiles('/relative/path/to/dir');

await fs.createFile('/relative/to/filename', 'File content');

await fs.deleteFile('/relative/to/filename');

await fs.deleteDir('/relative/to/dir');
```
