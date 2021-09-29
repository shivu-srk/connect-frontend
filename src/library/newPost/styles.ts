import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid #000;
	background-color: #fff;
`;

export const ComponentsWrapper = styled.div<{
	gap?: string;
	padding?: string;
	justifyContent?: string;
}>`
	display: flex;
	width: 100%;
	align-items: center;
	${(p) => p.gap && `gap: ${p.gap};`}
	${(p) => p.padding && `padding: ${p.padding};`}
	${(p) => p.justifyContent && `justify-content: ${p.justifyContent};`}
`;

export const ProfilePhoto = styled.img`
	border-radius: 50%;
	border: 1px solid;
	width: 40px;
	height: 40px;
`;

export const Divider = styled.div`
	width: 100%;
	height: 2px;
	background: #000;
`;

export const MenuIcon = styled.img`
	width: 40px;
	height: 40px;
	cursor: pointer;
`;
