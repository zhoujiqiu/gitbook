/**
 * Created by Tuffy on 2017/2/27.
 */
'use strict';

var fs = require('fs');
var gulp = require('gulp');
var lineRead = require('line-read');
var shell = require('gulp-shell');
var cheerio = require('cheerio');
var listFiles = require('list-files');
var firstline = require('firstline');
var webSever = require('gulp-webserver');
var path = require('path');

// create summary.md
gulp.task('create', function () {
  fs.writeFile('./gitbook/single/SUMMARY.md', '');
});

// write summary.md
gulp.task('write', ['create'], function () {
  var isBash = false;
  lineRead.readLineFromFile('./gitbook/single/README.md').forEach(function (line) {
    // 代码片段#号过滤
    if (line.indexOf('``` bash') === 0) {
      isBash = true;
    } else if (line.indexOf('```') === 0) {
      isBash = false;
    }
    // 标题过滤
    if (line.indexOf('#') === 0 && !isBash) {
      var titles = line.split(' ');
      var summaryTitle = [];
      for (var i = 1; i < titles[0].length; i++) {
        summaryTitle.push(' ');
      }
      summaryTitle.push('* ', '[' + titles.slice(1, titles.length).join('') + '](README.md)', '\n\r');
      fs.appendFileSync('./gitbook/single/SUMMARY.md', summaryTitle.join(''));
    }
  });
});

// gitbook build
gulp.task('build', ['write'], shell.task([
  'gitbook build ./gitbook/single/ ./docs'
]));

// deploy 单文件
gulp.task('deploy', ['build'], function () {
  fs.readFile('./docs/index.html', 'utf-8', function (err, html) {
    if (err) {
      console.error('===not find index.html===');
      return;
    }
    var $ = cheerio.load(html);
    $('a.navigation.navigation-next.navigation-unique').remove();
    $('ul.summary li').each(function (i) {
      var that = $(this);
      var a = that.find('a').eq(0);
      var aHtml = unescape((a.html() || '').trim().replace(/&#x/g,'%u').replace(/;/g,''));
      that.attr('data-path', '#' + aHtml);
      a.attr('href', '#' + aHtml);
      if (i > 0) {
        that.removeClass('active');
      }
    });
    fs.writeFile('./docs/index.html', $.html());
  });
});

gulp.task('m2h-s', ['deploy'], function () {
  gulp.src('docs').pipe(webSever({
    port:'9090',
    livereload: true,
    open: true,
    fallback: './index.html'
  }));
});

// ===================================================

// create2 summary.md
gulp.task('create2', function () {
  fs.writeFile('./gitbook/multi/SUMMARY.md', '');
});

// build2
gulp.task('build2', ['create2'], function () {
  var dir = path.normalize('./gitbook/multi');
  var summaryArray = [];
  listFiles(function (list) {
    list.sort();
    // 获取.md文件列表并异步执行
    for (var i = 0; i < list.length; i++) {
      var fileString = null;
      if (list[i].indexOf('.\\') >= 0) {
        fileString = list[i].replace('.\\' + dir + '\\', '');
      } else if (list[i].indexOf('./') >= 0) {
        fileString = list[i].replace('./' + dir + '/', '');
      }
      if (fileString.indexOf('README.md') === 0) {
        summaryArray.push('* [' + firstLineSync(list[i]) + '](README.md)\n\r');
        continue;
      } else if (fileString.indexOf('SUMMARY.md') === 0) {
        continue;
      }
      var fileArray = null;
      if (fileString.indexOf('/') >= 0) {
        fileArray = fileString.split('/');
      } else if (fileString.indexOf('\\') >= 0) {
        fileArray = fileString.split('\\');
      } else {
        fileArray = fileString.split('/');
      }
      for (var j = 1; j < fileArray.length; j++) {
        summaryArray.push(' ');
      }
      // 获取SUMMARY标题
      var fileContent = firstLineSync(list[i]);
      if (!fileContent) {
        fileContent = fileArray.slice(fileArray.length - 1).join('').replace('.md', '');
      }
      // 添加SUMMARY目录
      summaryArray.push('* [' + fileContent + '](' + fileString + ')\n\r');
    }
    fs.writeFile('./gitbook/multi/SUMMARY.md', summaryArray.join(''));
  }, {
    dir: dir,
    name: 'md'
  });

  // get first line sync
  function firstLineSync(url) {
    var fileObject = fs.readFileSync(url.replace(/(\n)+|(\r\n)+|(\r)+|(\n\r)+/gi, ''));
    var b = new Buffer(fileObject);
    return (b.toString() || '').split('\n')[0].replace(/^[#, ]]*/, '');
  }
});

// deploy2
gulp.task('deploy2', ['build2'], shell.task([
  'gitbook build ./gitbook/multi ./docs'
]));

// m2h-m
gulp.task('default', ['deploy2'], function () {
  gulp.src('docs').pipe(webSever({
    host: '127.0.0.1',
    port:'9091',
    livereload: true,
    open: true,
    fallback: './index.html'
  }));
});

