import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../library/button';
import Input from '../../library/input';
import LandingPage from '../../library/landingPage';
import { signinAPI } from '../../services';
import { signinValidation } from '../validate';
import * as Styles from '../styles';
import { useCookies } from 'react-cookie';

function Signin() {
	const history = useHistory();
	const [cookie, setCookie] = useCookies(['__connect__user__email__']);
	const [emailId, setEmailId] = useState('');
	const [password, setPassword] = useState('');

	const getMaxExpireDate = () => {
		var d = new Date();
		d.setTime(d.getTime() + 999 * 24 * 60 * 60 * 1000);
		return d;
	};

	const emailIdHandler = (e: any) => {
		setEmailId(e.target.value);
	};
	const passwordHandler = (e: any) => {
		setPassword(e.target.value);
	};
	const signinHandler = async () => {
		if (signinValidation(emailId, password)) {
			const response = await signinAPI(emailId, password);
			if (response) {
				setCookie('__connect__user__email__', emailId, {
					path: '/',
					expires: getMaxExpireDate(),
				});
				history.push('/dashboard');
			}
		} else {
			console.log('hi');
		}
	};

	return (
		<Styles.Wrapper>
			<Styles.Card>
				<LandingPage />
				<Styles.ComponentsWrapper>
					<Styles.Title>Sign In</Styles.Title>
					<Styles.SubTitle>
						Welcome back, your friends are waiting for you!
					</Styles.SubTitle>
					<Input
						value={emailId}
						placeHolder={'Email Id'}
						onChangeHandler={emailIdHandler}
						type={'email'}
						width={'100%'}
						margin={'10px 0'}
					/>
					<Input
						value={password}
						placeHolder={'Password'}
						onChangeHandler={passwordHandler}
						type={'password'}
						width={'100%'}
						margin={'15px 0'}
					/>
					<Button
						name={'SIGN IN'}
						onClickHandler={signinHandler}
						width={'100%'}
						fontSize={'16px'}
						bg={'#4972FF'}
						borderRadius={'5px'}
						color={'#fff'}
						margin={'20px 0'}
					/>
					<Styles.Text>
						Not Registered?{' '}
						<span onClick={() => history.push('/signup')}>
							Sign Up
						</span>
					</Styles.Text>
				</Styles.ComponentsWrapper>
			</Styles.Card>
		</Styles.Wrapper>
	);
}

export default Signin;
