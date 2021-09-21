import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 56px;
	padding: 0 15px;
	position: absolute;
	background: #fff;
	top: 0;
`;

export const Spacer = styled.div`
	display: flex;
	flex: 1;
`;

export const Icon = styled.img<{
	width?: string;
	height?: string;
	borderRadius?: string;
	styles?: string;
}>`
	cursor: pointer;
	width: ${(p) => p.width || '30px'};
	height: ${(p) => p.height || '30px'};
	${(p) => p.borderRadius && `border-radius: ${p.borderRadius};`}
	${(p) => p.styles}
`;

export const IconWrapper = styled.div<{
	width?: string;
	height?: string;
	borderRadius?: string;
	styles?: string;
}>`
	cursor: pointer;
	position: relative;
	display: flex;
	align-items: center;
	width: ${(p) => p.width || '30px'};
	height: ${(p) => p.height || '30px'};
	${(p) => p.borderRadius && `border-radius: ${p.borderRadius};`}
	${(p) => p.styles}
`;

export const ComponentsWrapper = styled.div<{
	height?: string;
	width?: string;
	justifyContent?: string;
	styles?: string;
	selected?: boolean;
	cursor?: string;
}>`
	display: flex;
	height: ${(p) => p.height || '100%'};
	align-items: center;
	${(p) => p.width && `width: ${p.width};`}
	${(p) => p.justifyContent && `justify-content: ${p.justifyContent};`}
    ${(p) => p.styles}
    ${(p) =>
		p.selected &&
		`
        border-radius: 25px; 
        border: 1px solid #7d4c09; 
        padding: 0 10px; 
        background: #efe2d5;
    `}
    ${(p) =>
		p.cursor === 'true' &&
		`
    cursor: pointer;`}
`;

export const ActiveLink = styled.div`
	position: absolute;
	height: 4px;
	width: 55px;
	bottom: -2px;
	left: -11px;
	background: linear-gradient(180deg, #2c3ed2 0%, #3260ff 100%, #3260ff 100%);
`;

export const Text = styled.div`
	font-weight: bold;
	font-size: 14px;
	line-height: 17px;
	margin-left: 10px;
`;
