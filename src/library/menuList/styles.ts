import styled from 'styled-components';

export const MenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	align-items: flex-start;
`;

export const MenuList = styled.div<{
	alignItems?: string;
	margin?: string;
}>`
	display: flex;
	gap: 10px;
	cursor: pointer;
	margin: ${(p) => p.margin || '10px 0 25px'};
	align-items: ${(p) => p.alignItems || 'center'};
`;

export const Icon = styled.img`
	width: 35px;
	height: 35px;
`;

export const MenuName = styled.div`
	font-size: 16px;
	line-height: 19px;
	font-weight: 600;
`;
