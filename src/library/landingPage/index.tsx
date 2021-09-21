import React from 'react';
import * as Styles from './styles';
import SocialNetwork from '../../assets/socialNetwork.jpg';

function LandingPage() {
	return (
		<Styles.Wrapper>
			<Styles.Title>Connect</Styles.Title>
			<Styles.SubHeading>World's Largest Friend Finder</Styles.SubHeading>
			<Styles.Image src={SocialNetwork} alt={'social network'} />
		</Styles.Wrapper>
	);
}

export default LandingPage;
