import React from 'react';
import BaseComponent from '@components/layout/base';

const routes = [
	{
		path: '/',
		exact: true,
		active: '1',
		breadcrumb: ['主页'],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/home')),
	},
	{
		path: '/about',
		active: '2',
		breadcrumb: ['关于'],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/about')),
	},
	{
		path: '*',
		active: '',
		breadcrumb: [],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/404')),
	},
];

export default routes;
