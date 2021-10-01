import React, { lazy, Suspense } from 'react';
import {
	Route,
	BrowserRouter as Router,
	Switch,
	Redirect,
} from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Signin = lazy(() => import('./auth/signin'));
const SignUp = lazy(() => import('./auth/signup'));
const Profile = lazy(() => import('./profile'));
const Dashboard = lazy(() => import('./dashboard'));

export function Routes() {
	const cookie = useCookies(['__connect__user__email__'])[0];
	return (
		<Router>
			<Suspense fallback={<h5>Loading...</h5>}>
				<Switch>
					<Route exact path={'/'} component={Signin} />
					<Route exact path={'/signup'} component={SignUp} />

					{cookie.__connect__user__email__ ? (
						<Route
							exact
							path={'/dashboard'}
							component={Dashboard}
						/>
					) : (
						<Redirect to={'/'} />
					)}
					{cookie.__connect__user__email__ ? (
						<Route exact path={'/profile'} component={Profile} />
					) : (
						<Redirect to={'/'} />
					)}
				</Switch>
			</Suspense>
		</Router>
	);
}
