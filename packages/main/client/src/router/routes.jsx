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
		path: '/article/work',
		active: '2',
		breadcrumb: ['文章', '工作'],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/work')),
	},
	{
		path: '/article/life',
		active: '3',
		breadcrumb: ['文章', '生活'],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/life')),
	},
	{
		path: '/article/others',
		active: '4',
		breadcrumb: ['文章', '其他'],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/others')),
	},
	{
		path: '/messageBoard',
		active: '5',
		breadcrumb: ['留言板'],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/messageBoard')),
	},
	{
		path: '/about',
		active: '6',
		breadcrumb: ['关于'],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/about')),
	},
	{
		path: '/app1',
		active: '7',
		breadcrumb: ['app1-首页'],
		componentTemplate: BaseComponent,
		child: null,
	},
	{
		path: '/app1/about',
		active: '8',
		breadcrumb: ['app1-首页'],
		componentTemplate: BaseComponent,
		child: null,
	},
	// {
	// 	path: '/app2',
	// 	active: '9',
	// 	breadcrumb: ['app2-首页'],
	// 	componentTemplate: BaseComponent,
	// 	child: null,
	// },
	{
		path: '*',
		active: '',
		breadcrumb: [],
		componentTemplate: BaseComponent,
		child: React.lazy(() => import('@pages/404')),
	},
];

export default routes;
