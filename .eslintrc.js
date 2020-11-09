/* istanbul ignore file */
module.exports = {
	'root': true,
	'extends': ['@dwp/eslint-config-base', 'plugin:sonarjs/recommended'],
	'plugins': [
		'sonarjs'
	],
	'rules': {
		'sonarjs/no-duplicate-string': ['error', 100]
	},
};
