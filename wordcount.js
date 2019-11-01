#!/usr/bin/env node 

const glob = require('glob');
const fs = require('fs');
const path = require('path');
const wordcount = require('wordcount');

let bookWordCount = 0;

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

// 3) calculate all chapter word counts
for (let i = 0; i < chapters.length; i += 1) {
  bookWordCount += wordcount(fs.readFileSync(chapters[i]).toString());
}

console.log(bookName + ': ' + bookWordCount);