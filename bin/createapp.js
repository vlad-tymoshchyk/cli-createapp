const
  fs = require('fs'),
  chalk = require('chalk'),
  logSymbols = require('log-symbols');

/*******************************
 * check if directory is empty *
 * *****************************/
fs.readdir('./', (err, files) => {
  if (err) throw err;
  if (files.length) {
    logFolderNotEmpty();
  }
});

/***********************
 * creating index.html *
 * *********************/
fs.access('./index.html', (err) => {
  if (!err) {
    logFailedToCreate('index.html')
  } else {
    let html = 
      '<!DOCTYPE html>\n'
    + '<html lang="en">\n'
    + '  <head>\n'
    + '    <meta charset="UTF-8">\n'
    + '    <title></title>\n'
    + '    <link rel="stylesheet" href="style.css"/>\n'
    + '  </head>\n'
    + '  <body>\n'
    + '    <h1>Hello world</h1>\n'
    + '    <hr>\n'
    + '    <script src="script.js" type="text/javascript"></script>\n'
    + '  </body>\n'
    + '</html>'
    fs.writeFile('index.html', html, (err) => {
      if (err) throw err;
      logCreatedSuccessfuly('index.html');
    });
  }
});

/**********************
 * creating script.js *
 * ********************/
fs.access('./script.js', (err) => {
  if (!err) {
    logFailedToCreate('script.js')
  } else {
    let js = `console.log('script added');`
    fs.writeFile('script.js', js, (err) => {
      if (err) throw err;
      logCreatedSuccessfuly('script.js');
    });
  }
});

/**********************
 * creating style.css *
 * ********************/
fs.access('./style.css', (err) => {
  if (!err) {
    logFailedToCreate('style.css')
  } else {
    let css = 
    'body {\n'
  + '  background-color: #dddddd;\n'
  + '}'
    fs.writeFile('style.css', css, (err) => {
      if (err) throw err;
      logCreatedSuccessfuly('style.css');
    });
  }
});

/*********************
 * helping functions *
 *********************/
function logCreatedSuccessfuly(filename) {
    console.log(chalk.bold.bgGreen.white(logSymbols.success + ' ' + filename + ' created'));
}

function logFailedToCreate(filename) {
    console.log(chalk.bold.bgWhite.red(logSymbols.error + ' failed to create a file ' + filename + ', this file already exists'));
}

function logFolderNotEmpty() {
    console.log(chalk.bold.bgMagenta.yellow(logSymbols.warning + ' WARN: folder is not empty'));
}

