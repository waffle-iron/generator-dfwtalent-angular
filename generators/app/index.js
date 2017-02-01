'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the legendary ' + chalk.red('generator-dfwtalent-angular') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'docker',
      message: 'Would you like to include docker?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(this.templatePath('_dockerignore'), this.destinationPath('.dockerignore'));
    this.fs.copy(this.templatePath('_editorconfig'), this.destinationPath('.editorconfig'));
    this.fs.copy(this.templatePath('_editorconfig'), this.destinationPath('.editorconfig'));
    this.fs.copy(this.templatePath('_gitignore'), this.destinationPath('.gitignore'));
    if (this.props.docker) {
      this.fs.copy(this.templatePath('Dockerfile'), this.destinationPath('Dockerfile'));
    }
    this.fs.copy(this.templatePath('gulpfile.js'), this.destinationPath('gulpfile.js'));
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html'), {appname: this.props.appname}
    );
    this.fs.copy(this.templatePath('karma.conf.js'), this.destinationPath('karma.conf.js'));
    this.fs.copy(this.templatePath('LICENSE'), this.destinationPath('LICENSE'));
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {appname: this.props.appname, docker: this.props.docker}
    );
    this.fs.copy(this.templatePath('protractor.config.js'), this.destinationPath('protractor.config.js'));
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'), {appname: this.props.appname}
    );
    this.fs.copy(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'));
    this.fs.copy(this.templatePath('tslint.json'), this.destinationPath('tslint.json'));
    this.fs.copy(this.templatePath('typings.json'), this.destinationPath('typings.json'));
    this.fs.copy(this.templatePath('yarn.lock'), this.destinationPath('yarn.lock'));
    this.fs.copy(this.templatePath('client/**/*'), this.destinationPath('client'));
    this.fs.copyTpl(
      this.templatePath('client/index.html'),
      this.destinationPath('client/index.html'), {appname: this.props.appname}
    );
    this.fs.copyTpl(
      this.templatePath('client/app/shared/header.component.html'),
      this.destinationPath('client/app/shared/header.component.html'), {appname: this.props.appname}
    );
    this.fs.copy(this.templatePath('server/**/*'), this.destinationPath('server'));
    this.fs.copy(this.templatePath('e2e/**/*'), this.destinationPath('e2e'));
  },

  install: function () {
    this.installDependencies({
      bower: false,
      npm: false,
      yarn: true
    });
  }
});
