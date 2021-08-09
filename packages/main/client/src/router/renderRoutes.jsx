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
						console.log('propspropspropspropspropsprops', props);
						return (
							<route.componentTemplate
								breadcrumbs={route.breadcrumb}
								active={route.active}
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
