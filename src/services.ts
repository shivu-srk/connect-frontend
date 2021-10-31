import axios from 'axios';

const url =
	process.env.NODE_ENV === 'production'
		? 'https://connect-friends-web.herokuapp.com/'
		: 'http://localhost:8000/';

export const signupAPI = async (
	name: string,
	emailId: string,
	password: string,
	role: string,
) => {
	try {
		const response = await axios({
			method: 'POST',
			url: url + 'auth/signup',
			data: {
				name,
				emailId,
				password,
				role,
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
			url: url + 'auth/signin',
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
		const response = await axios.post(url + 'post/details', {
			emailId,
		});
		return response;
	} catch (e) {
		return false;
	}
};
