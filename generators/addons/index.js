// Base Yeoman generator
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {

        super(args, opts);

        this.promptConfig = require('./promptConfig');

    }

    // Initialisation geenerator
    initializing() {

    }

    prompting() {
        console.log('>>> PROMPTIN: addon');
    }

    configuring() {

    }

    writing() {

    }

    install() {

    }

    end() {

    }

}