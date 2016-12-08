'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {

    this.log(yosay(
      'Tartiflette !'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Name?',
        default: "my-project"
      },
      {
        type: 'confirm',
        name: 'includeReact',
        message: 'React?',
        default: true
      },
      {
        type: 'confirm',
        name: 'includeServer',
        message: 'Server?',
        default: true
      }
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: {

    packageJSON : function() {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {
          name : this.props.name,
          includeReact : this.props.includeReact,
          includeServer : this.props.includeServer
        }
      )
    },

    git : function() {
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      )
    },

    webpack : function() {
      this.fs.copyTpl(
        this.templatePath('webpack.config.js'),
        this.destinationPath('webpack.config.js'),
        {
          includeReact : this.props.includeReact
        }
      )
    },

    configs : function() {
      this.fs.copyTpl(
        this.templatePath('eslintrc.json'),
        this.destinationPath('.eslintrc.json'),
        {
          includeReact : this.props.includeReact
        }
      )

      this.fs.copy(
        this.templatePath('stylelintrc'),
        this.destinationPath('.stylelintrc')
      )
    },

    index : function() {
      this.fs.copyTpl(
        this.templatePath('src/index.js'),
        this.destinationPath('src/index.js'),
        {
          includeReact : this.props.includeReact
        }
      )
    },

    modules : function() {
      this.fs.copyTpl(
        this.templatePath('src/modules/Home.js'),
        this.destinationPath('src/modules/Home.js'),
        {
          name : this.props.name,
          includeReact : this.props.includeReact,
          includeServer : this.props.includeServer
        }
      )
    },

    html : function() {
      this.fs.copyTpl(
        this.templatePath('src/static/index.html'),
        this.destinationPath('src/static/index.html'),
        {
          name : this.props.name,
          includeReact : this.props.includeReact
        }
      )
    },

    assets : function() {
      this.fs.copy(
        this.templatePath('src/static/assets'),
        this.destinationPath('src/static/assets')
      )
    },

    styles : function() {
      this.fs.copy(
        this.templatePath('src/scss/'),
        this.destinationPath('src/scss')
      )
    },

    router : function() {
      if ( this.props.includeReact ) {

        this.fs.copy(
          this.templatePath('src/routes.js'),
          this.destinationPath('src/routes.js')
        )

        this.fs.copy(
          this.templatePath('src/modules/Layout.js'),
          this.destinationPath('src/modules/Layout.js')
        )

        this.fs.copy(
          this.templatePath('src/modules/Navigation.js'),
          this.destinationPath('src/modules/Navigation.js')
        )

        this.fs.copy(
          this.templatePath('src/modules/Tab1.js'),
          this.destinationPath('src/modules/Tab1.js')
        )

        this.fs.copy(
          this.templatePath('src/modules/Tab2.js'),
          this.destinationPath('src/modules/Tab2.js')
        )

      }
    },

    server : function() {
      if ( this.props.includeServer ) {

        this.fs.copy(
          this.templatePath('src/server.js'),
          this.destinationPath('src/server.js')
        )

        this.fs.copy(
          this.templatePath('src/api/routes.js'),
          this.destinationPath('src/api/routes.js')
        )

        this.fs.copy(
          this.templatePath('src/api/schemas/hello.js'),
          this.destinationPath('src/api/schemas/hello.js')
        )

      }
    }
  },

  install: function () {
    this.npmInstall()
  }
});
