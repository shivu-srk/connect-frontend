import React from 'react';
import { useHistory } from 'react-router-dom';
import { menuItems } from './list';
import { IMenuDetails } from './types';
import * as Styles from './styles';

function MenuList(props: IMenuDetails) {
	const history = useHistory();
	return (
		<Styles.MenuWrapper>
			<Styles.MenuList
				alignItems={'end'}
				margin={'10px 0 45px'}
				onClick={() => history.push(`/profile/${props.name}`)}>
				<Styles.Icon
					src={'https://img.icons8.com/dusk/64/000000/guest-male.png'}
				/>
				<Styles.MenuName>{props.name}</Styles.MenuName>
			</Styles.MenuList>
			<>
				{menuItems.map((item) => (
					<Styles.MenuList key={item.id}>
						<Styles.Icon src={item.icon} />
						<Styles.MenuName>{item.name}</Styles.MenuName>
					</Styles.MenuList>
				))}
			</>
		</Styles.MenuWrapper>
	);
}

export default MenuList;
