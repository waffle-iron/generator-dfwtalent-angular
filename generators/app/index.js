'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var _ = require('lodash');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the majestic ' + chalk.red('generator-irvui-angular-2') + ' generator!'
    ));
    
    var default_app = _.kebabCase(path.basename(process.cwd()));
    console.log('*******');
    console.log(default_app);
    console.log('*******');

    var prompts = [{
      type: 'input',
      name: 'appname',
      message: 'Please enter the name of project',
      default: default_app
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      console.log(this.props)
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
        appname: this.props.appname
      }
    );
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'), {
        appname: this.props.appname
      }
    );
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html'), {
        appname: this.props.appname
      }
    );
    this.fs.copy(
      this.templatePath('client/**/*'),
      this.destinationPath('client')
    );
    this.fs.copy(
      this.templatePath('server/**/*'),
      this.destinationPath('server')
    );
    this.fs.copy(
      this.templatePath('e2e/**/*'),
      this.destinationPath('e2e')
    );
    this.fs.copy(
      this.templatePath('_test-output/**/*'),
      this.destinationPath('_test-output')
    );
    this.fs.copyTpl(
      this.templatePath('client/index.html'),
      this.destinationPath('client/index.html'), {
        appname: this.props.appname
      }
    );
    this.fs.copyTpl(
      this.templatePath('client/app/shared/header.component.html'),
      this.destinationPath('client/app/shared/header.component.html'), {
        appname: this.props.appname
      }
    );
    this.copy('gulpfile.js', 'gulpfile.js');
    this.copy('LICENSE', 'LICENSE');
    this.copy('protractor.config.js', 'protractor.config.js');
    this.copy('tsconfig.json', 'tsconfig.json');
    this.copy('tslint.json', 'tslint.json');
    this.copy('typings.json', 'typings.json');
    this.copy('karma.conf.js', 'karma.conf.js');
    this.copy('Dockerfile', 'Dockerfile');
    this.copy('.gitignore', '.gitignore');
    this.copy('.dockerignore', '.dockerignore');
    this.copy('.editorconfig', '.editorconfig');
    // this.copy('client/index.html','client/index.html')
    // // this.directory('e2e','e2e')
    // // this.copy('server','server')
    // this.copy('README.md','README.md')
    // this.copy('package.json','package.json')
    // this.copy('index.html', 'index.html');
    // this.copy('gulpfile.js', 'gulpfile.js');
  },
    // this.fs.copy(
    //   this.templatePath('dummyfile.txt'),
    //   this.destinationPath('dummyfile.txt')
    // );
  // },

  install: function () {
    this.installDependencies({
      bower: false
    });
  }
});
