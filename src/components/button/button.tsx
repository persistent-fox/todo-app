import { ButtonHTMLAttributes, FC } from "react";
import styled, { css } from "styled-components";

type TVariants = "primary" | "default";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: TVariants;
	isActive?: boolean;
};

export const Button: FC<TButtonProps> = ({ variant = "default", isActive, ...props }) => {
	return <SButton $variant={variant} $isActive={Number(isActive)} {...props} />;
};

const SButton = styled.button<SButtonProps>`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 4px 10px;
	color: ${props => props.theme.colors.text.tertiary};
	border: 1px solid transparent;
	border-radius: 5px;
	font-weight: 400;
	min-width: fit-content;
	${props =>
		props.$isActive &&
		css`
			border-color: ${props => props.theme.colors.accent};
		`};
	${props =>
		props.$variant === "primary" &&
		css`
			color: ${props => props.theme.colors.text.primary};
			background-color: ${props => props.theme.colors.accent};
			&:hover {
				background-color: ${props => props.theme.colors.tertiary};
			}
		`};
	&:disabled {
		background-color: ${props => props.theme.colors.grey.silver};
		color: ${props => props.theme.colors.grey.dark};
		cursor: default;
	}
`;

// types
type SButtonProps = {
	$isActive: number;
	$variant?: TVariants;
};
