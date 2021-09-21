import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../library/button';
import Input from '../../library/input';
import LandingPage from '../../library/landingPage';
import * as Styles from '../styles';

function Signin() {
	const history = useHistory();
	const [emailId, setEmailId] = useState('');
	const [password, setPassword] = useState('');

	const emailIdHandler = (e: any) => {
		setEmailId(e.target.value);
	};
	const passwordHandler = (e: any) => {
		setPassword(e.target.value);
	};
	const signinHandler = () => {};

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
