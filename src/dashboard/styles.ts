import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	width: 100%;
	background-color: #f2f3f5;
`;

export const ComponentsWrapper = styled.div`
	display: grid;
	grid-template-columns: 283px auto 374px;
	height: 100%;
	width: 100%;
	padding: 20px;
	gap: 30px;
`;

export const CenterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: calc(100vh - 86px);
	gap: 30px;
	overflow-y: auto;
`;
