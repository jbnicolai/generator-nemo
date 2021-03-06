//inspired by generator-kraken tests

'use strict';

module.exports = function makeBase(generator) {
  return Object.create({
    type: 'nemo:' + generator,

    args: [],

    dependencies: [
      '../app'
    ],

    options: {
      'skip-install': true
    },

    prompt: {
      'testFramework': 'mocha',
      'baseDirOption': 'test/functional',
      'browserOption': 'phantomjs',
      'seleniumJarPath': '/usr/local/bin/selenium-server-standalone.jar',
      'customSpec': 'No',
      'sauceSetup': 'No'
    }
  });
};
