import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderRoutes from './renderRoutes';
import routes from './routes';

const { __POWERED_BY_QIANKUN__ } = window;

export default function RootRouter() {
	return (
		<Router basename={__POWERED_BY_QIANKUN__ ? '/@@appName' : '/'}>
			{renderRoutes(routes)}
		</Router>
	);
}
// export default class RootRouter extends React.Component {
// 	render() {
// 		return <Router basename="/app2">{renderRoutes(routes)}</Router>;
// 	}
// }
