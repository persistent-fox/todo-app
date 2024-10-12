import { FC } from "react";
import { Checkbox } from "../../../../components/checkbox/checkbox";
import { Flag } from "../../../../components/icons";
import { TPriorities, TTask } from "../../../../store/reducers/tasks-reducer";
import styled, { css } from "styled-components";
import { EditableTitle } from "../../../../components/editable-title/editable-title";

type TTaskProps = {
	task: TTask;
};

export const Task: FC<TTaskProps> = ({ task }) => {
	return (
		<STask>
			<Checkbox />
			<EditableTitle>
				<Title>{task.title}</Title>
			</EditableTitle>
			<Priority priority={task.priority}>
				<Flag size={20} />
			</Priority>
		</STask>
	);
};

const STask = styled.li`
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 10px;
	border-bottom: 1px solid ${props => props.theme.colors.grey.medium};
`;

const Title = styled.h4`
	flex-grow: 1;
	color: ${props => props.theme.colors.text.dark};
`;

const Priority = styled.div<TPriority>`
	svg {
		path {
			fill: ${props => props.theme.colors.status.error};
		}
	}
	${props =>
		props.priority === "low" &&
		css`
			svg {
				path {
					fill: ${props => props.theme.colors.status.succeed};
				}
			}
		`}
	${props =>
		props.priority === "medium" &&
		css`
			svg {
				path {
					fill: ${props => props.theme.colors.status.warning};
				}
			}
		`}
`;

type TPriority = {
	priority: TPriorities;
};
