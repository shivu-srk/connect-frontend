export const signupValidation = (
	name: string,
	emailId: string,
	password: string,
) => {
	return !!emailId && !!password && !!name;
};

export const signinValidation = (emailId: string, password: string) => {
	return !!emailId && !!password;
};
