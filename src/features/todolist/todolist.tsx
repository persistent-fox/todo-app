import styled, { css } from "styled-components";
import { FlexWrapper } from "../../components/styled/flex-wrapper";
import { Button } from "../../components/button/button";
import { TasksList } from "./tasks-list/tasks-list";
import { SEditableTitle } from "../../components/editable-title/editable-title";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getTasksTC, setPriorityFilter } from "../../store/reducers/tasks-reducer";
import { Filters } from "./filters/filters";
import { activeTasksCount, priorityFilterSelect } from "../../store/selectors/tasks-selectors";
import { CreateTaskForm } from "./create-task-form/create-task-form";
import { Arrow } from "../../components/icons/arrow";
import { TaskSkeleton } from "./tasks-list/task/task-skeleton/task-skeleton";

export const TodoList = () => {
	const dispatch = useAppDispatch();
	const count = useAppSelector(activeTasksCount);
	const priorityFilter = useAppSelector(priorityFilterSelect);

	const onChangePriorityFilter = () => {
		dispatch(setPriorityFilter());
	};

	useEffect(() => {
		dispatch(getTasksTC());
	}, [dispatch]);

	return (
		<STodolist>
			<Title>Todolist</Title>
			<CreateTaskForm />
			<div>
				<TaskSkeleton />
				<TaskSkeleton />
				<TaskSkeleton />
			</div>
			{/* <TasksList /> */}
			<FlexWrapper wrap='wrap' justify='space-between'>
				<CountInfo>Active tasks: {count}</CountInfo>
				<Filters />
				<Button onClick={onChangePriorityFilter}>
					<span>Priority</span>
					<ArrowOrder $priorityFilter={priorityFilter}>
						<Arrow size={20} color='#5c7282' />
					</ArrowOrder>
				</Button>
			</FlexWrapper>
		</STodolist>
	);
};

const STodolist = styled.div`
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
