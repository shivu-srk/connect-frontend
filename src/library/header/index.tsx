import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Input from '../input';
import { IHeader } from './types';
import * as Styles from './styles';
import Logo from '../../assets/logo.png';
import Search from '../../assets/search.png';

function Header(props: IHeader) {
	const history = useHistory();
	const removeCookie = useCookies(['__connect__user__email__'])[2];
	const { username, isHome } = props;
	const [search, setSearch] = useState('');

	const searchHandler = (e: any) => {
		setSearch(e.target.value);
	};

	const logoutHandler = () => {
		removeCookie('__connect__user__email__');
		history.push('/');
	};

	return (
		<Styles.Wrapper isHome={isHome}>
			<Styles.Icon
				src={Logo}
				width={'40px'}
				height={'40px'}
				styles={'margin: 0 10px'}
			/>
			<Input
				value={search}
				onChangeHandler={searchHandler}
				placeHolder={'search'}
				width={'200px'}
				height={'40px'}
				borderRadius={'15px'}
				icon={Search}
			/>
			<Styles.Spacer />
			<Styles.ComponentsWrapper
				width={'300px'}
				justifyContent={'space-around'}
				onClick={() => history.push('/dashboard')}>
				<Styles.IconWrapper height={'100%'}>
					<Styles.Icon
						src={
							'https://img.icons8.com/ios-filled/50/4a90e2/home.png'
						}
					/>
					{isHome && <Styles.ActiveLink />}
				</Styles.IconWrapper>
				<Styles.Icon
					src={
						'https://img.icons8.com/ios-filled/50/4a90e2/group-foreground-selected.png'
					}
				/>
				<Styles.Icon
					src={
						'https://img.icons8.com/ios-filled/50/4a90e2/filled-speech-bubble-with-dots--v1.png'
					}
				/>
			</Styles.ComponentsWrapper>
			<Styles.Spacer />
			<Styles.ComponentsWrapper
				width={'100px'}
				height={'40px'}
				cursor={'true'}
				justifyContent={'flex-end'}
				isSelected={!isHome}
				onClick={() => history.push(`/profile/${username}`)}>
				<Styles.IconWrapper
					borderRadius={'50%'}
					width={'25px'}
					height={'25px'}
					styles={'justify-content: center; border: 1px solid;'}>
					<Styles.Icon
						src={
							'https://img.icons8.com/dusk/64/000000/guest-male.png'
						}
						width={'15px'}
						height={'15px'}
					/>
				</Styles.IconWrapper>
				<Styles.Text>{username}</Styles.Text>
			</Styles.ComponentsWrapper>
			<Styles.ComponentsWrapper
				width={'100px'}
				justifyContent={'space-evenly'}
				styles={'margin: 0 15px'}>
				<Styles.IconWrapper
					borderRadius={'50%'}
					width={'25px'}
					height={'25px'}
					styles={'justify-content: center; border: 1px solid;'}>
					<Styles.Icon
						src={
							'https://img.icons8.com/dusk/64/000000/squared-menu.png'
						}
						width={'15px'}
						height={'15px'}
					/>
				</Styles.IconWrapper>
				<Styles.IconWrapper
					borderRadius={'50%'}
					width={'25px'}
					height={'25px'}
					styles={'justify-content: center; border: 1px solid;'}>
					<Styles.Icon
						src={
							'https://img.icons8.com/dusk/64/000000/appointment-reminders.png'
						}
						width={'15px'}
						height={'15px'}
					/>
				</Styles.IconWrapper>
				<Styles.IconWrapper
					borderRadius={'50%'}
					width={'25px'}
					height={'25px'}
					styles={'justify-content: center; border: 1px solid;'}
					onClick={logoutHandler}>
					<Styles.Icon
						src={'https://img.icons8.com/dusk/64/000000/exit.png'}
						width={'15px'}
						height={'15px'}
					/>
				</Styles.IconWrapper>
			</Styles.ComponentsWrapper>
		</Styles.Wrapper>
	);
}

export default Header;
