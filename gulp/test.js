﻿const gulp = require('gulp');
const Server = require('karma').Server;

// Start a Karma server and execute test suites. Configuraiton bound in karma.conf.js
// http://karma-runner.github.io/
gulp.task('test', (done) => {
  const server = new Server({
    configFile: `${__dirname}/../karma.config.js`,
    // Don't run in continuous integration mode.
    // Just execute tests once and exit.
    singleRun: true
  }, done);

  server.start();
});