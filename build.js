'use strict';

((mode) => {
    mode = mode.toLowerCase() == 'prod' ? 'prod' : 'dev';
    
    const $    = require('shelljs');
    const fs   = require('fs');
    const path = require('path');
    const pkg  = require('root-require')('package.json');
    $.config.fatal = true;
    const rootDir  = __dirname;
    
    console.log(`# Building ${pkg.name} : ${pkg.version}`);
    if (pgk.author) {
        console.log(`## Author: ${pkg.author}`);
    }
    $.cd(rootDir);
    
    console.log('## Restoring packages...');
    $.exec('npm install');
    console.log('## Packages restored.');


    console.log(`## Running ${mode} build...`);
    $.exec(`npm run "build:${mode == 'prod' ? 'prod' : ''}"`);
    console.log('## Build finished.');
    $.cd(rootDir);
    
})(process.argv[2] || 'dev');
