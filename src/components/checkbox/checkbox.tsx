import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import srcImg from "./../../assets/arrow.svg";
import styled, { css } from "styled-components";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type TCheckboxProps = Omit<DefaultInputPropsType, "type"> & {
	label?: string;
	type?: "checkbox" | "radio";
};

export const Checkbox: FC<TCheckboxProps> = ({ label, type = "checkbox", ...props }) => {
	return (
		<Label>
			<Input $variant={type} type={type} {...props} />
			<FakeCheckbox></FakeCheckbox>
			{label}
		</Label>
	);
};

export const Label = styled.label`
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
`;

export const FakeCheckbox = styled.span`
	position: relative;
	display: block;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: 2px solid ${props => props.theme.colors.grey.medium};
	padding: 2px;
`;

export const Input = styled.input<TInputProps>`
	position: absolute;
	width: 1px;
	height: 1px;
	overflow: hidden;
	clip: rect(0 0 0 0);
	&:checked + ${FakeCheckbox}::after {
		content: url(${srcImg});
		position: absolute;
		width: 20px;
		height: 20px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	${props =>
		props.$variant === "radio" &&
		css`
			&:checked + ${FakeCheckbox}::after {
				content: "";
				display: block;
				width: 16px;
				height: 16px;
				background-color: ${props => props.theme.colors.accent};
				border-radius: 50%;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		`}
`;

//types

type TInputProps = {
	$variant: "checkbox" | "radio";
};
