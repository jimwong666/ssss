import React from 'react';
import BaseComponent from '@components/layout/base';

const routes = [
	{
		path: '/',
		exact: true,
		key: '1',
		breadcrumb: ['主页'],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/home')),
	},
	{
		path: '/article/work',
		exact: true,
		key: '2',
		breadcrumb: ['文章', '工作'],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/work')),
	},
	{
		path: '/article/life',
		exact: true,
		key: '3',
		breadcrumb: ['文章', '生活'],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/life')),
	},
	{
		path: '/article/others',
		exact: true,
		key: '4',
		breadcrumb: ['文章', '其他'],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/others')),
	},
	{
		path: '/messageBoard',
		exact: true,
		key: '5',
		breadcrumb: ['留言板'],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/messageBoard')),
	},
	{
		path: '/about',
		exact: true,
		key: '6',
		breadcrumb: ['关于'],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/about')),
	},
	{
		path: '/app1',
		exact: true,
		key: '7',
		breadcrumb: ['app1-首页'],
		componentTemplate: BaseComponent,
		child: null,
	},
	{
		path: '/app1/about',
		exact: true,
		key: '8',
		breadcrumb: ['app1-关于'],
		componentTemplate: BaseComponent,
		child: null,
	},
	{
		path: '/app2',
		exact: true,
		key: '9',
		breadcrumb: ['app2-首页'],
		componentTemplate: BaseComponent,
		child: null,
	},
	{
		path: '/app2/about',
		exact: true,
		key: '10',
		breadcrumb: ['app2-关于'],
		componentTemplate: BaseComponent,
		child: null,
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
