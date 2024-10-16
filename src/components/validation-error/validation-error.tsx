import { FC, memo } from "react";
import styled from "styled-components";
import { font } from "../../styles/common";

type TValidationErrorProps = {
	errorMessage: string;
};

export const ValidationError: FC<TValidationErrorProps> = memo(({ errorMessage }) => {
	return <SValidationError>{errorMessage}</SValidationError>;
});

const SValidationError = styled.div`
	color: ${props => props.theme.colors.status.error};
	${font({
		weight: 400,
		Fmin: 12,
		Fmax: 15,
	})};
	padding-left: 10px;
`;
