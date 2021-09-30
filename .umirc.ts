import { defineConfig } from 'dumi';

export default defineConfig({
	title: 'Site Name',
	mode: 'site',
	outputPath: 'docs',
	base: '/ssss',
	resolve: {
		includes: ['documents', 'packages/pkg/src'],
	},
	// more config: https://d.umijs.org/config
});
