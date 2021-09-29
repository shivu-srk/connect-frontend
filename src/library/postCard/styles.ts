import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid;
	width: 700px;
	margin: 0 auto;
	background: #fff;
`;

export const Header = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	padding: 10px;
	border-bottom: 2px solid;
`;

export const Photo = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 1px solid;
`;

export const Spacer = styled.div`
	display: flex;
	flex: 1;
`;

export const Name = styled.div`
	font-size: 16px;
	line-height: 19px;
	font-weight: 700;
	margin-left: 10px;
`;

export const Icon = styled.img`
	width: 30px;
	height: 30px;
	cursor: pointer;
`;

export const Image = styled.img`
	width: 100%;
	height: 300px;
	object-fit: cover;
`;

export const Footer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	padding: 10px;
	border-top: 2px solid;
`;
