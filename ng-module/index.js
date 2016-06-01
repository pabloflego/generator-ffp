'use strict';
//Require dependencies
var yeoman = require('yeoman-generator'),
    _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
    prompting: function() {
        var done = this.async(),
            prompts = [
                {
                    type: 'input',
                    name: 'appName',
                    message: 'App Name',
                    default: 'app'
                },{
                    type: 'input',
                    name: 'moduleName',
                    message: 'Module Name',
                    //Defaults to the project's folder name if the input is skipped
                    default: this.appname
                }
            ];
        this.prompt(prompts, function(answers) {
            this.props = answers;
            this.log(answers.appName);
            this.log(answers.moduleName);
            done();
        }.bind(this));
    },
    //Writing Logic here
    writing: {
        first: function() {
            // xxx.module.js
            this.fs.copyTpl(
                this.templatePath('_module.module.js'),
                this.destinationPath(this.props.moduleName + '.module.js'), {
                    appName: this.props.appName,
                    moduleName: this.props.moduleName
                }
            );

            // xxx.controller.js
            this.fs.copyTpl(
                this.templatePath('_module.controller.js'),
                this.destinationPath(this.props.moduleName + '.controller.js'), {
                    appName: this.props.appName,
                    moduleName: this.props.moduleName,
                    moduleNameCap: _.capitalize(this.props.moduleName)
                }
            );

            // xxx.config.route.js
            this.fs.copyTpl(
                this.templatePath('_module.config.route.js'),
                this.destinationPath(this.props.moduleName + '.config.route.js'), {
                    appName: this.props.appName,
                    moduleName: this.props.moduleName,
                    moduleNameCap: _.capitalize(this.props.moduleName)
                }
            );

            // xxx.html
            this.fs.copyTpl(
                this.templatePath('_module.html'),
                this.destinationPath(this.props.moduleName + '.html'), {
                    moduleName: this.props.moduleName
                }
            );
        }
    }
});
