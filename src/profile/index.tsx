import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Header from '../library/header';
import { profileDetailsAPI } from '../services';
import * as Styles from './styles';

function Profile() {
	const [cookie] = useCookies(['__connect__user__email__']);
	const emailId = cookie.__connect__user__email__;

	const [user, setUser] = useState<{
		name: string;
		role: string;
	}>({
		name: '',
		role: '',
	});

	useEffect(() => {
		getDetails();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [emailId]);

	const getDetails = async () => {
		const { status, name, role } = await profileDetailsAPI(emailId);
		if (status) {
			setUser({
				...user,
				name: name,
				role: role,
			});
		}
	};

	return (
		<Styles.Wrapper>
			<Header username={user.name} />
			<Styles.Card>
				<Styles.ProfilePhoto
					src={
						'https://img.icons8.com/dusk/100/000000/guest-male.png'
					}
				/>
				<Styles.Name>{user.name}</Styles.Name>
				<Styles.Role>{user.role}</Styles.Role>
				<Styles.Bio>~Live and Let Live~</Styles.Bio>
			</Styles.Card>
		</Styles.Wrapper>
	);
}

export default Profile;
