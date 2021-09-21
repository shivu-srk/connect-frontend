import styled from 'styled-components';

export const Wrapper = styled.div<{
	width?: string;
	height?: string;
	margin?: string;
	borderRadius?: string;
	styles?: string;
}>`
	display: flex;
	padding: 0 10px;
	border: 1px solid #000;
	align-items: center;
	${(p) => p.margin && `margin: ${p.margin}`};
	width: ${(p) => p.width || '250px'};
	height: ${(p) => p.height || '50px'};
	border-radius: ${(p) => p.borderRadius || '10px'};
	${(p) => p.styles}
`;

export const Input = styled.input`
	width: 100%;
	height: 100%;
	font-weight: 700;
	border: none;
	outline: none;
	cursor: pointer;
`;

export const Icon = styled.img<{
	width?: string;
	height?: string;
	styles?: string;
}>`
	margin-right: 10px;
	width: ${(p) => p.width || '24px'};
	height: ${(p) => p.height || '24px'};
	${(p) => p.styles}
`;
