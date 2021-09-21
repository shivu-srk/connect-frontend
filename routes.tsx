import React, { lazy, Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { history } from './src/history';

export function Routes() {
	return (
		<Router history={history}>
			<Switch>
				<Suspense fallback={<h5>Loading...</h5>}>
					<Route />
				</Suspense>
			</Switch>
		</Router>
	);
}
