const fs = require('fs');
const ejs = require('ejs');
const esprima = require('esprima');
const escodegen = require('escodegen');

const sortProps = (dependencies) => {

    var sortedObject = {};
    let sortedKeys = Object.keys(dependencies).sort();

    for (var i = 0; i < sortedKeys.length; i++) {
        sortedObject[sortedKeys[i]] = dependencies[sortedKeys[i]]
    }

    return sortedObject;

}

module.exports = {

    mergeAddons: (addonConfig, requestedLibraries, config) => {

        let dependencies = config.dependencies;
        let devDependencies = config.devDependencies;

        for (let key in addonConfig) {

            console.log("KEYS: ", key)

            if (requestedLibraries.indexOf(key) !== -1) {

                // inject dependencies
                if (addonConfig[key].dependencies) {

                    for (let depend in addonConfig[key].dependencies) {

                        dependencies[depend] = addonConfig[key].dependencies[depend];

                    }

                }

                // inject dev dependencies
                if (addonConfig[key].devDependencies) {

                    for (let depend in addonConfig[key].devDependencies) {

                        devDependencies[depend] = addonConfig[key].devDependencies[depend];

                    }
                }
                // adding dev dependencies
            }

        }

        // sort package properties
        let sortedDependencies = sortProps(dependencies);
        let sortedDevDependencies = sortProps(devDependencies);

        // assing sorted dependencies
        config.dependencies = sortedDependencies;
        config.devDependencies = sortedDevDependencies;

        // return new configuration
        return config;

    },
    composeGulpFile: (coreTemplate, customTemplate) => {

        if (!fs.existsSync(coreTemplate)) {
            const error = 'Error: File names ' + coreTemplate + ' cannot be found';
            throw error;
        }

        if (!fs.existsSync(customTemplate)) {
            const error = 'Error: File names ' + customTemplate + ' cannot be found';
            throw error;
        }

        var coreTemplatContent = fs.readFileSync(coreTemplate, 'utf-8'),
            customTemplateContent = fs.readFileSync(customTemplate, 'utf-8');

        let gulpGileContent = ejs.render(coreTemplatContent, {
            customTasks: customTemplateContent
        });

        return gulpGileContent;

    }

}