import React, { useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Button from '../../library/button';
import Input from '../../library/input';
import LandingPage from '../../library/landingPage';
import { signupAPI } from '../../services';
import { signupValidation } from '../validate';
import * as Styles from '../styles';

function Signup() {
	const history = useHistory();
	const setCookie = useCookies(['__connect__user__email__'])[1];
	const [name, setName] = useState('');
	const [emailId, setEmailId] = useState('');
	const [password, setPassword] = useState('');

	const validated = useMemo(
		() => signupValidation(name, emailId, password),
		[name, emailId, password],
	);

	const getMaxExpireDate = () => {
		var d = new Date();
		d.setTime(d.getTime() + 999 * 24 * 60 * 60 * 1000);
		return d;
	};

	const nameHandler = (e: any) => {
		setName(e.target.value);
	};
	const emailIdHandler = (e: any) => {
		setEmailId(e.target.value);
	};
	const passwordHandler = (e: any) => {
		setPassword(e.target.value);
	};
	const signupHandler = async () => {
		if (signupValidation(name, emailId, password)) {
			const response = await signupAPI(name, emailId, password);
			if (response) {
				setCookie('__connect__user__email__', emailId, {
					path: '/',
					expires: getMaxExpireDate(),
				});
				history.push('/dashboard');
			}
		} else {
			console.log('Incorrect Format');
		}
	};

	return (
		<Styles.Wrapper>
			<Styles.Card>
				<LandingPage />
				<Styles.ComponentsWrapper>
					<Styles.Title margin={'3px 0'}>Sign Up</Styles.Title>
					<Styles.SubTitle>
						Join now, It's time to make new friends!
					</Styles.SubTitle>
					<Input
						value={name}
						placeHolder={'Name'}
						onChangeHandler={nameHandler}
						width={'100%'}
						margin={'10px 0'}
					/>
					<Input
						value={emailId}
						placeHolder={'Email Id'}
						onChangeHandler={emailIdHandler}
						type={'email'}
						width={'100%'}
						margin={'15px 0'}
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
						name={'SIGN UP'}
						onClickHandler={signupHandler}
						width={'100%'}
						fontSize={'16px'}
						bg={'#4972FF'}
						borderRadius={'5px'}
						color={'#fff'}
						margin={'20px 0'}
						disabled={!validated}
					/>
					<Styles.Text>
						Already Registered?{' '}
						<span onClick={() => history.push('/')}>Sign In</span>
					</Styles.Text>
				</Styles.ComponentsWrapper>
			</Styles.Card>
		</Styles.Wrapper>
	);
}

export default Signup;
