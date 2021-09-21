import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const Signin = lazy(() => import('./auth/signin'));
const SignUp = lazy(() => import('./auth/signup'));
const Profile = lazy(() => import('./profile'));

export function Routes() {
	return (
		<Router>
			<Suspense fallback={<h5>Loading...</h5>}>
				<Switch>
					<Route exact path={'/'} component={Signin} />
					<Route exact path={'/signup'} component={SignUp} />
					<Route exact path={'/profile'} component={Profile} />
				</Switch>
			</Suspense>
		</Router>
	);
}
