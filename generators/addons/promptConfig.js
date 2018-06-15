const jqueryOptions = [{
        'name': '3.x.x (recommended)',
        'value': '3.0.0',
        default: true
    },
    {
        'name': '2.x.x',
        'value': '2.0.0'
    }
]

const configOptions = [
    // Library selection
    {
        type: 'checkbox',
        message: 'Which libraries to include',
        name: 'jsLibrary',
        choices: [
            "jQuery",
            "pnpjs"
        ]
    },
    // jQuery version selection
    {
        type: 'list',
        message: "Which version of jQuery to include",
        name: 'jQueryVersion',
        choices: jqueryOptions,
        when: answers => answers.jsLibrary.indexOf('jQuery') !== -1
    }
]

module.exports = configOptions;