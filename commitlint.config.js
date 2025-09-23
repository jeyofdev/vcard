export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [2, 'always', ['config', 'feat', 'fix', 'doc', 'style', 'refactor', 'data']],
		'subject-case': [2, 'never', ['sentence-case']],
	},
};
