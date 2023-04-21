module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		"@typescript-eslint"
	],
	rules: {
		quotes: ['error', 'single'],
		'jsx-quotes': ["error", "prefer-double"]
	},
};
