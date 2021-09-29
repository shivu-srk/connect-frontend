import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	height: 100%;
	width: 100%;
	background-color: #f2f3f5;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
	width: 75%;
	height: 512px;
	background: #ffffff;
`;

export const ProfilePhoto = styled.img`
	border-radius: 50%;
	border: 1px solid;
`;

export const Name = styled.div`
	font-size: 22px;
	font-weight: bold;
	line-height: 26px;
	margin-top: 3%;
`;

export const Bio = styled.div`
	font-size: 16px;
	font-weight: 600;
	line-height: 19px;
	margin-top: 3%;
`;
