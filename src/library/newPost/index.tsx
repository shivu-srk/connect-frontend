import React, { useState } from 'react';
import Input from '../input';
import * as Styles from './styles';

function NewPost() {
	const [text, setText] = useState('');

	const textHandler = (e: any) => {
		setText(e.target.value);
	};

	return (
		<Styles.Wrapper>
			<Styles.ComponentsWrapper gap={'8px'} padding={'15px'}>
				<Styles.ProfilePhoto
					src={'https://img.icons8.com/dusk/64/000000/guest-male.png'}
				/>
				<Input
					value={text}
					onChangeHandler={textHandler}
					placeHolder={'Hey, how you feeling?'}
					height={'45px'}
					width={'100%'}
				/>
			</Styles.ComponentsWrapper>
			<Styles.Divider />
			<Styles.ComponentsWrapper
				padding={'15px 15px 10px'}
				justifyContent={'space-around'}>
				<Styles.MenuIcon
					src={'https://img.icons8.com/nolan/64/google-images.png'}
				/>
				<Styles.MenuIcon
					src={
						'https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-video-camera-advertising-kiranshastry-gradient-kiranshastry.png'
					}
				/>
				<Styles.MenuIcon
					src={
						'https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-emoji-emoji-justicon-lineal-color-justicon-9.png'
					}
				/>
			</Styles.ComponentsWrapper>
		</Styles.Wrapper>
	);
}

export default NewPost;
