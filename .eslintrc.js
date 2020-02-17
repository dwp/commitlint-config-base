/* istanbul ignore file */
module.exports = require( '@dwp/eslint-config-base' );
module.exports.plugins =  ['sonarjs'];
module.exports.extends.push('plugin:sonarjs/recommended')
