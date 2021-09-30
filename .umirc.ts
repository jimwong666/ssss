import { defineConfig } from 'dumi';

export default defineConfig({
	title: 'SSSS-project',
	mode: 'site',
	outputPath: 'docs',
	base: '/ssss',
	publicPath: '/ssss/',
	resolve: {
		includes: ['docs-sources', 'packages/pkg/src'],
	},
	// more config: https://d.umijs.org/config
});
