import React from 'react';
import * as Styles from './styles';

function PostCard() {
	return (
		<Styles.Wrapper>
			<Styles.Header>
				<Styles.Photo
					src={'https://img.icons8.com/dusk/64/000000/guest-male.png'}
				/>
				<Styles.Name>Shivani</Styles.Name>
				<Styles.Spacer />
				<Styles.Icon
					src={
						'https://img.icons8.com/material-outlined/48/000000/menu-2.png'
					}
				/>
			</Styles.Header>
			<Styles.Image
				src={
					'https://thumbs.dreamstime.com/b/spring-landscape-blooming-sakura-cherry-tree-single-falling-pink-flower-petals-hills-covered-fresh-green-grass-142256962.jpg'
				}
			/>
			<Styles.Footer>
				<Styles.Icon
					src={
						'https://img.icons8.com/emoji/48/000000/heart-suit.png'
					}
				/>
			</Styles.Footer>
		</Styles.Wrapper>
	);
}

export default PostCard;
