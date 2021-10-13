'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _icons = require('@ant-design/icons');

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var menuData = [
	{
		subMenuKey: 'base',
		icon: /*#__PURE__*/ _react.default.createElement(_icons.HddOutlined, null),
		text: '基础资料',
		subMenuGroup: [
			{
				menuKey: '2',
				path: '/goods/add',
				icon: null,
				text: '新增物品',
			},
			{
				menuKey: '3',
				path: '/goods/list',
				icon: null,
				text: '物品列表',
			},
			{
				menuKey: '4',
				path: '/supplier/add',
				icon: null,
				text: '新增供应商',
			},
			{
				menuKey: '5',
				path: '/supplier/list',
				icon: null,
				text: '供应商列表',
			},
		],
	},
];
var _default = menuData;
exports.default = _default;
