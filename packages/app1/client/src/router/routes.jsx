import React from 'react';
import BaseComponent from '@components/layout/base';

const routes = [
	{
		path: '/goods/add',
		exact: true,
		key: '2',
		breadcrumb: ['基础资料', '新增物品'],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/home')),
	},
	{
		path: '/goods/list',
		exact: true,
		key: '3',
		breadcrumb: ['基础资料', '物品列表'],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/about')),
	},
	{
		path: '/supplier/add',
		exact: true,
		key: '4',
		breadcrumb: ['基础资料', '新增供应商'],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/home')),
	},
	{
		path: '/supplier/list',
		exact: true,
		key: '5',
		breadcrumb: ['基础资料', '供应商列表'],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/about')),
	},
	{
		path: '*',
		key: '',
		breadcrumb: [],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/404')),
	},
];

export default routes;
