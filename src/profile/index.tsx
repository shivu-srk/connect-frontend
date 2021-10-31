import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../library/header';
import * as Styles from './styles';

function Profile() {
	const { name } = useParams<{ name: string }>();
	
	return (
		<Styles.Wrapper>
			<Header username={name} />
			<Styles.Card>
				<Styles.ProfilePhoto
					src={
						'https://img.icons8.com/dusk/100/000000/guest-male.png'
					}
				/>
				<Styles.Name>{name}</Styles.Name>
				<Styles.Bio>~Live and Let Live~</Styles.Bio>
			</Styles.Card>
		</Styles.Wrapper>
	);
}

export default Profile;
