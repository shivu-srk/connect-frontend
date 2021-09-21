import React from 'react';
import { IInputDetails } from './types';
import * as Styles from './styles';

function Input(props: IInputDetails) {
	const {
		value,
		type,
		placeHolder,
		margin,
		width,
		height,
		borderRadius,
		icon,
		iconWidth,
		iconHeight,
		iconStyles,
		styles,
		onChangeHandler,
	} = props;

	return (
		<Styles.Wrapper
			width={width}
			margin={margin}
			height={height}
			borderRadius={borderRadius}
			styles={styles}>
			{icon && (
				<Styles.Icon
					src={icon}
					width={iconWidth}
					height={iconHeight}
					styles={iconStyles}
				/>
			)}
			<Styles.Input
				value={value}
				onChange={onChangeHandler}
				type={type || 'string'}
				placeholder={placeHolder}
			/>
		</Styles.Wrapper>
	);
}

export default Input;
