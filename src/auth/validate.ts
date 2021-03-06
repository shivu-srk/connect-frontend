export const emailValidation = (email: string) =>
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email,
	);

export const passwordValidation = (password: string) =>
	/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,32}$/.test(
		password,
	);

export const signupValidation = (
	name: string,
	emailId: string,
	password: string,
	role: string,
) => {
	return (
		!!emailId &&
		emailValidation(emailId) &&
		!!password &&
		passwordValidation(password) &&
		!!name &&
		!!role
	);
};

export const signinValidation = (emailId: string, password: string) => {
	return (
		!!emailId &&
		emailValidation(emailId) &&
		!!password &&
		passwordValidation(password)
	);
};
