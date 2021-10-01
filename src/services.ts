import axios from 'axios';
import { useCookies } from 'react-cookie';

const getMaxExpireDate = () => {
	var d = new Date();
	d.setTime(d.getTime() + 999 * 24 * 60 * 60 * 1000);
	return d;
};

export const signupAPI = async (
	name: string,
	emailId: string,
	password: string,
) => {
	try {
		const response = await axios({
			method: 'POST',
			url: 'http://localhost:8000/auth/signup',
			data: {
				name,
				emailId,
				password,
			},
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
		});
		if (response.status) {
			const res = await signinAPI(emailId, password);
			return res;
		}
		return false;
	} catch (e) {
		return false;
	}
};

export const signinAPI = async (emailId: string, password: string) => {
	try {
		const response = await axios({
			method: 'POST',
			url: 'http://localhost:8000/auth/signin',
			data: {
				emailId,
				password,
			},
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
		});

		if (response) {
			return true;
		}
		return false;
	} catch (e) {
		return false;
	}
};

export const postDetailsAPI = async (emailId: string) => {
	try {
		const response = await axios.post(
			'http://localhost:8000/post/details',
			{
				emailId,
			},
		);
		return response;
	} catch (e) {
		return false;
	}
};
