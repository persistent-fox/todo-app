import { FC, InputHTMLAttributes } from "react";
import srcImg from "./../../assets/arrow.svg";
import styled from "styled-components";

export type TCheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
};

export const Checkbox: FC<TCheckboxProps> = ({ label, ...props }) => {
	return (
		<Label>
			<Input type='checkbox' {...props} />
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

export const Input = styled.input`
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
`;
