import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderRoutes from './renderRoutes';
import routes from './routes';

export default function RootRouter() {
	return <Router basename="/app1">{renderRoutes(routes)}</Router>;
}
// export default class RootRouter extends React.Component {
// 	render() {
// 		return <Router basename="/app1">{renderRoutes(routes)}</Router>;
// 	}
// }
