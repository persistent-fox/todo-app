import { ChangeEvent, FC, useState } from "react";
import { Checkbox } from "../../../../components/checkbox/checkbox";
import { Flag } from "../../../../components/icons";
import { TPriorities, TTask, updateTaskTC } from "../../../../store/reducers/tasks-reducer";
import styled, { css } from "styled-components";
import { EditableTitle } from "../../../../components/editable-title/editable-title";
import { useAppDispatch } from "../../../../store/store";

type TTaskProps = {
	task: TTask;
};

export const Task: FC<TTaskProps> = ({ task }) => {
	const [title, setTitle] = useState(task.title);

	const dispatch = useAppDispatch();
	const onChangeStatus = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(updateTaskTC({ ...task, isDone: event.target.checked }));
	};

	const onUpdateTitle = () => {
		dispatch(updateTaskTC({ ...task, title }));
	};

	const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newTitle = e.target.value;
		setTitle(newTitle);
	};

	return (
		<STask>
			<Checkbox checked={task.isDone} onChange={onChangeStatus} />
			<EditableTitle onHandleChange={onHandleChange} onUpdateTitle={onUpdateTitle} taskTitle={title}>
				<Title $isDone={task.isDone}>{title}</Title>
			</EditableTitle>
			<Priority $priority={task.priority}>
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

type TPriority = {
	$priority: TPriorities;
};

type TTitleProps = {
	$isDone: boolean;
};
