import { ButtonHTMLAttributes, FC } from "react";
import styled, { css } from "styled-components";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "";
	isActive?: boolean;
};

export const Button: FC<TButtonProps> = ({ variant, isActive, ...props }) => {
	return <SButton isActive={Number(isActive)} {...props} />;
};

const SButton = styled.button<SButtonProps>`
	padding: 4px 10px;
	color: ${props => props.theme.colors.text.tertiary};
	border: 1px solid transparent;
	border-radius: 5px;
	font-weight: 400;
	${props =>
		props.isActive &&
		css`
			border-color: ${props => props.theme.colors.accent};
		`}
`;

// types
type SButtonProps = {
	isActive: number;
};
