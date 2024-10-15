import styled, { css } from "styled-components";
import { SEditableTitle } from "../../components/editable-title/editable-title";

const Todolist = styled.div`
	max-width: 800px;
	width: 100%;
	padding: 10px;
	border-radius: 5px;
	background-color: ${props => props.theme.colors.primary};
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05), 0 6px 20px rgba(0, 0, 0, 0.1);
	${SEditableTitle} {
		flex-grow: 1;
	}
`;

const Title = styled.h2`
	text-align: center;
	color: ${props => props.theme.colors.text.tertiary};
	margin-bottom: 20px;
`;

const CountInfo = styled.span`
	padding: 4px 10px;
	color: ${props => props.theme.colors.text.tertiary};
	border: 1px solid transparent;
	border-radius: 5px;
	font-weight: 400;
`;

const ArrowOrder = styled.span<TArrowOrderProps>`
	${props =>
		props.$priorityFilter === "desc" &&
		css`
			transform: rotateX(180deg);
		`}
`;

//types

type TArrowOrderProps = {
	$priorityFilter: "desc" | "asc";
};

export const S = {
	Todolist,
	Title,
	CountInfo,
	ArrowOrder,
};
