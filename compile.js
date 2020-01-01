#!/usr/bin/env node 

const glob = require('glob');
const fs = require('fs');
const path = require('path');

let bookContent = '';

if (process.argv.length <= 2) {
  console.error('Usage: ' + __filename + ' <book-name>');
  process.exit(-1);
}


// 1) read in book name from arg
let bookName = process.argv[2];
let draftName = process.argv[3];

// 2) get list of all chapters from __dirname/<book name>/chapters
let chapterSrc = __dirname + '/' + bookName + '/' + draftName + '/*.txt';
let chapters = glob.sync(chapterSrc);

// 3) concatenate all chapter content into book
for (let i = 0; i < chapters.length; i += 1) {
  bookContent += fs.readFileSync(chapters[i]);
}

// 4) write book content to __dirname/<book name>.md
fs.writeFileSync(__dirname + '/' + bookName + '/book.txt', bookContent);
