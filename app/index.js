// Base Yeoman generator
const Generator = require('yeoman-generator');
// Sub generators used by @pnp/spfx
const subGenerator = require('./subGenerators');

// Prompt core configuration
const prompting = require('./promptConfig');

// Help Message
const help = require('./help');

module.exports = class extends Generator {

    constructor(args, opts) {

        super(args, opts);

    }

    // Initialisation geenerator
    initializing() {
        // integrate addon generator
        console.log('APP PROMPTING');

        this.composeWith(
            subGenerator.main
        );

        this.composeWith(
            subGenerator.addons
        );

    }

    // Prompt for user input for Custom Generator
    prompting() {
        
        /* DON NOT ENTER CODE HERE */
        this.prompt(prompting.config);
    }

    // adds additonal editor support in this case CSS Comb
    configuring() {
        // console.log('APP --- Config');
    }

    // adds additonal editor support in this case CSS Comb
    writing() {}

    // adds additonal editor support in this case CSS Comb
    install() {

    }

    // Run installer normally time to say goodbye
    // If yarn is installed yarn will be used
    end() {

    }

    _showHelp() {
        console.log("Show Help");
        console.log(help.cmdOptions);
    }

}