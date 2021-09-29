import React from 'react';
import Header from '../library/header';
import MenuList from '../library/menuList';
import NewPost from '../library/newPost';
import PostCard from '../library/postCard';
import SuggestionList from '../library/suggestionList';
import * as Styles from './styles';

function Dashboard() {
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
