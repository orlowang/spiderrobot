
var fs = require('fs');
var mkdirp = require('mkdirp');
var ncp = require('ncp');
var del = require('del');

const write = (file, contents) => new Promise((resolve, reject) => {
  fs.writeFile(file, contents, 'utf8', err => err ? reject(err) : resolve());
});

const create = (name) => new Promise((resolve, reject) => {
  mkdirp(name, err => err ? reject(err) : resolve());
});

const copy = (source, dest) => new Promise((resolve, reject) => {
  ncp(source, dest, err => err ? reject(err) : resolve());
});

const dele = (source, opt) => new Promise((resolve, reject) => {
  del(source, opt, err => err ? reject(err) : resolve());
});

module.exports = { write, create, copy, dele };
