import styled, { css } from "styled-components";
import { EPriorities, RequestStatusType } from "../../../../store/reducers/tasks-reducer";

const Task = styled.li<TSTaskProps>`
	position: relative;
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 10px 25px;
	border-bottom: 1px solid ${props => props.theme.colors.grey.medium};
	${props =>
		props.$disabled === "loading" &&
		css`
			opacity: 0.6;
		`}
`;

const Loading = styled.div`
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
`;

const Title = styled.h4<TTitleProps>`
	font-weight: 400;
	color: ${props => props.theme.colors.text.dark};
	${props =>
		props.$isDone &&
		css`
			color: ${props => props.theme.colors.text.tertiary};
			text-decoration: line-through;
		`}
`;

const Priority = styled.div<TPriority>`
	svg {
		path {
			fill: ${props => props.theme.colors.status.error};
		}
	}
	${props =>
		props.$priority === 0 &&
		css`
			svg {
				path {
					fill: ${props => props.theme.colors.status.succeed};
				}
			}
		`}
	${props =>
		props.$priority === 1 &&
		css`
			svg {
				path {
					fill: ${props => props.theme.colors.status.warning};
				}
			}
		`}
`;

const DeleteButton = styled.button`
	cursor: pointer;
	opacity: 0.6;
	transition: all 0.3s;
	svg {
		path {
			fill: ${props => props.theme.colors.grey.dark};
		}
	}
	&:hover {
		opacity: 1;
	}
`;

type TSTaskProps = {
	$disabled: RequestStatusType;
};

type TPriority = {
	$priority: EPriorities;
};

type TTitleProps = {
	$isDone: boolean;
};

export const S = {
	Task,
	Loading,
	Title,
	Priority,
	DeleteButton,
};
