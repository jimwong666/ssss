import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const renderRoutes = (routes, extraProps = {}, switchProps = {}) =>
	routes ? (
		<Switch {...switchProps}>
			{routes.map((route, i) => (
				<Route
					key={route.key || i}
					path={route.path}
					exact={route.exact}
					strict={route.strict}
					render={(props) => {
						let searchObj = {};
						if (!!props.location.search) {
							for (let val of props.location.search.substr(1).split('&')) {
								let valArr = val.split('=');
								searchObj[valArr[0]] = valArr[1];
							}
						}
						props.location.searchObj = searchObj;

						return (
							<route.componentTemplate
								breadcrumbArr={route.breadcrumb}
								selectKeys={route.key}
								{...props}
								{...extraProps}
								route={route}
							>
								<Suspense fallback={<div>loadinggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</div>}>
									{route.child && <route.child />}
								</Suspense>
							</route.componentTemplate>
						);
					}}
				/>
			))}
		</Switch>
	) : null;

export default renderRoutes;
