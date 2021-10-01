import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Header from '../library/header';
import MenuList from '../library/menuList';
import NewPost from '../library/newPost';
import PostCard from '../library/postCard';
import SuggestionList from '../library/suggestionList';
import { postDetailsAPI } from '../services';
import * as Styles from './styles';

function Dashboard() {
	const [cookie, setCookie] = useCookies(['__connect__user__email__']);
	const [name, setName] = useState('');
	const [postDetails, setPostDetails] = useState(null);

	const getDetails = async () => {
		const emailId = cookie.__connect__user__email__;
		const response = await postDetailsAPI(emailId);
		if (response) {
			console.log(response);
			setName(response.data.name);
			setPostDetails(response.data.postDetails);
		}
	};

	useEffect(() => {
		getDetails();
	}, []);
	return (
		<Styles.Wrapper>
			<Header username={'Shivani'} isHome />
			<Styles.ComponentsWrapper>
				<MenuList />
				<Styles.CenterWrapper>
					<NewPost />
					<PostCard />
					<PostCard />
					<PostCard />
				</Styles.CenterWrapper>
				<SuggestionList />
			</Styles.ComponentsWrapper>
		</Styles.Wrapper>
	);
}

export default Dashboard;
