import React, { useState } from 'react';
import { IPostDetails } from './types';
import * as Styles from './styles';

function PostCard(props: IPostDetails) {
	const { postedBy, photoUrl } = props;
	const [liked, setLiked] = useState(false);

	const likeHandler = () => setLiked(!liked);
	return (
		<Styles.Wrapper>
			<Styles.Header>
				<Styles.Photo
					src={'https://img.icons8.com/dusk/64/000000/guest-male.png'}
				/>
				<Styles.Name>{postedBy}</Styles.Name>
				<Styles.Spacer />
				<Styles.Icon
					width={'20px'}
					height={'20px'}
					src={
						'https://img.icons8.com/material-outlined/48/000000/menu-2.png'
					}
				/>
			</Styles.Header>
			<Styles.Image src={photoUrl} />
			<Styles.Footer onClick={likeHandler}>
				{liked ? (
					<Styles.Icon
						src={
							'https://img.icons8.com/ios-glyphs/48/fa314a/like--v1.png'
						}
					/>
				) : (
					<Styles.Icon
						src={
							'https://img.icons8.com/material-outlined/30/000000/like.png'
						}
					/>
				)}
			</Styles.Footer>
		</Styles.Wrapper>
	);
}

export default PostCard;
