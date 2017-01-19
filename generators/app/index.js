'use strict';
var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {

    this.log(yosay(
      'Tartiflette !\n A cheesy webapp generator.'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Webapp name',
        default: this.appname
      },
      {
        type: 'confirm',
        name: 'includeClient',
        message: 'Client',
        default: true
      },
      {
        type: 'confirm',
        name: 'includeReact',
        message: 'Client Framework (React)',
        default: true,
        when: (props) => {
          if (props.includeClient) return true
          return false
        }
      },
      {
        type: 'confirm',
        name: 'includeReactRouter',
        message: 'Router (React/Router)',
        default: true,
        when: (props) => {
          if (props.includeReact) return true
          return false
        }
      },
      {
        type: 'confirm',
        name: 'includeServer',
        message: 'Server (Express)',
        default: true
      },
      {
        type: 'confirm',
        name: 'includeAPI',
        message: 'API',
        default: true,
        when: (props) => {
          if (props.includeServer) return true
          return false
        }
      },
      {
        type: 'confirm',
        name: 'includeDB',
        message: 'Database (MongoDB)',
        default: true,
        when: (props) => {
          if (props.includeServer) return true
          return false
        }
      },
      {
        type: 'confirm',
        name: 'install',
        message: 'Install dependencies',
        default: true
      },
      {
        type: 'confirm',
        name: 'start',
        message: 'Start application',
        default: true,
        when: (props) => {
          if (props.install) return true
          return false
        }
      }
    ]

    return this.prompt(prompts)
      .then((props) => {
        this.props = props
      })
  },

  writing: {
    packageJSON : function() {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { props : this.props }
      )
    },

    git : function() {
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      )
    },

    client : function() {
      if (this.props.includeClient) {

        /**
         *
         * Configs
         *
         */

        // Webpack
        this.fs.copyTpl(
          this.templatePath('webpack.config.js'),
          this.destinationPath('webpack.config.js'),
          { props : this.props }
        )

        // Linters
        this.fs.copyTpl(
          this.templatePath('eslintrc.json'),
          this.destinationPath('.eslintrc.json'),
          { props : this.props }
        )
        this.fs.copy(
          this.templatePath('stylelintrc'),
          this.destinationPath('.stylelintrc')
        )
        this.fs.copy(
          this.templatePath('stylelintignore'),
          this.destinationPath('.stylelintignore')
        )


        /**
         *
         * Sources
         *
         */
        
        // Index
        this.fs.copyTpl(
          this.templatePath('client/src/index.js'),
          this.destinationPath('client/src/index.js'),
          { props : this.props }
        )

        if (this.props.includeReact) {
          // Modules
          this.fs.copyTpl(
            this.templatePath('client/src/modules/Home.js'),
            this.destinationPath('client/src/modules/Home.js'),
            { props : this.props }
          )

          if (this.props.includeReactRouter) {
            // Routes
            this.fs.copy(
              this.templatePath('client/src/routes.js'),
              this.destinationPath('client/src/routes.js')
            )
          }
        }

        // Styles
        this.fs.copy(
          this.templatePath('client/src/scss/'),
          this.destinationPath('client/src/scss')
        )

        // Fonts
        this.fs.copy(
          this.templatePath('client/src/fonts/'),
          this.destinationPath('client/src/fonts')
        )

        /**
         *
         * Static
         *
         */

        // Index
        this.fs.copyTpl(
          this.templatePath('client/static/index.html'),
          this.destinationPath('client/static/index.html'),
          { props : this.props }
        )

        // Assets
        this.fs.copy(
          this.templatePath('client/static/assets'),
          this.destinationPath('client/static/assets')
        )
      }
    },

    server : function() {
      if (this.props.includeServer) {

        this.fs.copyTpl(
          this.templatePath('server/index.js'),
          this.destinationPath('server/index.js'),
          { props : this.props }
        )

        if (this.props.includeAPI) {
          this.fs.copy(
            this.templatePath('server/api/index.js'),
            this.destinationPath('server/api/index.js')
          )
          this.fs.copy(
            this.templatePath('server/api/ping/index.js'),
            this.destinationPath('server/api/ping/index.js')
          )
        }

        if (this.props.includeDB) {
          mkdirp.sync('./data/');
        }

        if (this.props.includeAPI && this.props.includeDB) {
          this.fs.copy(
            this.templatePath('server/api/ping/schema.js'),
            this.destinationPath('server/api/ping/schema.js')
          )
        }
      }
    }
  },

  install: function () {
    if (this.props.install) this.npmInstall()
  },

  end: function() {
    if (this.props.start) {
      this.spawnCommand('npm', ['run', 'dev'])
      this.spawnCommand('subl', ['.'])
    }
  }
});
