import React from 'react';
import Header from '../library/header';
import * as Styles from './styles';

function Profile() {
	return (
		<Styles.Wrapper>
			<Header username={'Shivani'} />
			<Styles.Card>
				<Styles.ProfilePhoto
					src={
						'https://img.icons8.com/dusk/100/000000/guest-male.png'
					}
				/>
				<Styles.Name>Shivani</Styles.Name>
				<Styles.Bio>~Live and Let Live~</Styles.Bio>
			</Styles.Card>
		</Styles.Wrapper>
	);
}

export default Profile;
