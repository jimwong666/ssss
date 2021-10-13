import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
	title: 'SSSS-project',
	mode: 'site',
	outputPath: 'docs',
	base: '/ssss',
	publicPath: '/ssss/',
	resolve: {
		includes: ['docs-sources', 'packages/*/src'],
	},
	alias: {
		'@aeps-rc': path.resolve(__dirname, 'packages/aeps-rc/src'),
	},
	// more config: https://d.umijs.org/config
});
