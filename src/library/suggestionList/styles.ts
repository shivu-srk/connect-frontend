import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	gap: 20px;
`;

export const ComponentsWrapper = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
`;

export const DetailsWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Title = styled.div`
	font-size: 16px;
	line-height: 19px;
	font-weight: 700;
`;

export const Photo = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 1px solid;
`;

export const Name = styled.div`
	font-size: 14px;
	line-height: 17px;
	font-weight: 600;
`;

export const OptionWrapper = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const Option = styled.div`
	font-size: 12px;
	line-height: 16px;
	font-weight: 700;
`;

export const Icon = styled.img`
	width: 15px;
	height: 15px;
`;
