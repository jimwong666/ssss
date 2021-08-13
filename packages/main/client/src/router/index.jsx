import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderRoutes from './renderRoutes';
import routes from './routes';

export default function RootRouter() {
	return <Router basename="/">{renderRoutes(routes)}</Router>;
}
