import React from 'react';
import BaseComponent from '@components/layout/base';

const routes = [
	{
		path: '/pm/add',
		exact: true,
		key: '6',
		breadcrumb: ['项目管理', '新增项目'],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/home')),
	},
	{
		path: '/pm/list',
		exact: true,
		key: '7',
		breadcrumb: ['项目管理', '项目列表'],
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
