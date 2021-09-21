import React, { useState } from 'react';
import Input from '../input';
import * as Styles from './styles';
import Logo from '../../assets/logo.png';
import Search from '../../assets/search.png';

function Header() {
	const [search, setSearch] = useState('');

	const searchHandler = (e: any) => {
		setSearch(e.target.value);
	};

	return (
		<Styles.Wrapper>
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
				justifyContent={'space-around'}>
				<Styles.IconWrapper height={'100%'}>
					<Styles.Icon
						src={
							'https://img.icons8.com/ios-filled/50/4a90e2/home.png'
						}
					/>
					<Styles.ActiveLink />
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
			<Styles.ComponentsWrapper height={'40px'} cursor={'true'}>
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
				<Styles.Text>Shivani</Styles.Text>
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
					styles={'justify-content: center; border: 1px solid;'}>
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
