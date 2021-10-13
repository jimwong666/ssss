import path from 'path';

export default {
	disableTypeCheck: true,
	cjs: {
		type: 'babel',
		lazy: true,
	},
	esm: {
		type: 'babel',
		importLibToEs: true,
	},
	extraBabelPlugins: [
		[
			'babel-plugin-import',
			{
				libraryName: 'antd',
				style: true,
			},
			'antd',
		],
	],
	lessInBabelMode: {
		paths: [path.join(__dirname, 'packages/aeps-rc/node_modules/', 'antd')],
		javascriptEnabled: true,
	},
};
