import asyncLoad from './asyncLoad';

const routes = [
	{
		path: '/',
		exact: true,
		active: '1',
		breadcrumb: ['主页'],
		component: asyncLoad(() => import('@pages/home')),
	},
	{
		path: '/about',
		active: '2',
		breadcrumb: ['关于'],
		component: asyncLoad(() => import('@pages/about')),
	},
	{
		path: '*',
		active: '',
		breadcrumb: [],
		component: asyncLoad(() => import('@pages/404')),
	},
];

export default routes;
