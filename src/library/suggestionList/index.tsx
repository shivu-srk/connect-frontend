import React from 'react';
import { peopleList } from './list';
import * as Styles from './styles';

function SuggestionList() {
	return (
		<Styles.Wrapper>
			<Styles.Title>People You May Know</Styles.Title>
			<>
				{peopleList.map((person) => (
					<Styles.ComponentsWrapper key={person.id}>
						<Styles.Photo
							src={
								'https://img.icons8.com/dusk/64/000000/guest-male.png'
							}
						/>
						<Styles.DetailsWrapper>
							<Styles.Name>{person.name}</Styles.Name>
							<Styles.OptionWrapper>
								<Styles.Icon
									src={
										'https://img.icons8.com/material-outlined/64/000000/add.png'
									}
								/>
								<Styles.Option>Connect</Styles.Option>
							</Styles.OptionWrapper>
						</Styles.DetailsWrapper>
					</Styles.ComponentsWrapper>
				))}
			</>
		</Styles.Wrapper>
	);
}

export default SuggestionList;
