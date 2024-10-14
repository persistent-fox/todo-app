import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { font } from "../../styles/common";

type TTextFieldProps = InputHTMLAttributes<HTMLInputElement> & {};

export const TextField: FC<TTextFieldProps> = ({ ...props }) => {
	return (
		<>
			<Field type='text' {...props} />
		</>
	);
};

const Field = styled.input`
	width: 100%;
	padding: 5px 10px;
	border: none;
	border-radius: 4px;
	${font({
		weight: 400,
		Fmin: 12,
		Fmax: 30,
	})};
	color: ${props => props.theme.colors.text.dark};
	background-color: ${props => props.theme.colors.grey.light};
	&:focus-visible {
		outline: none;
		background-color: ${props => props.theme.colors.grey.silver};
	}
`;
