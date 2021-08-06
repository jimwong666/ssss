import notFound from '@pages/404';
import about from '@pages/about';
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
		path: '/article/work',
		active: '2',
		breadcrumb: ['文章', '工作'],
		component: asyncLoad(() => import('@pages/work')),
	},
	{
		path: '/article/life',
		active: '3',
		breadcrumb: ['文章', '生活'],
		component: asyncLoad(() => import('@pages/life')),
	},
	{
		path: '/article/others',
		active: '4',
		breadcrumb: ['文章', '其他'],
		component: asyncLoad(() => import('@pages/others')),
	},
	{
		path: '/messageBoard',
		active: '5',
		breadcrumb: ['留言板'],
		component: asyncLoad(() => import('@pages/messageBoard')),
	},
	{
		path: '/about',
		active: '6',
		breadcrumb: ['关于'],
		component: about,
	},
	{
		path: '*',
		active: '',
		breadcrumb: [],
		component: notFound,
	},
];

export default routes;
