import { FlexWrapper } from "../../components/styled/flex-wrapper";
import { Button } from "../../components/button/button";

import { memo, useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getTasksTC, setPriorityFilter } from "../../store/reducers/tasks-reducer";
import { Filters } from "./filters/filters";
import {
	activeTasksCount,
	priorityFilterSelect,
	tasksStatusSelect,
	errorSelect,
} from "../../store/selectors/tasks-selectors";
import { CreateTaskForm } from "./create-task-form/create-task-form";
import { Arrow } from "../../components/icons/arrow";
import { TaskSkeleton } from "./tasks-list/task/task-skeleton/task-skeleton";
import { TasksList } from "./tasks-list/tasks-list";
import { S } from "./todolist.styled";
import { Toast } from "../../components/toast/toast";

export const TodoList = memo(() => {
	const dispatch = useAppDispatch();
	const count = useAppSelector(activeTasksCount);
	const tasksStatus = useAppSelector(tasksStatusSelect);
	const priorityFilter = useAppSelector(priorityFilterSelect);
	const tasksError = useAppSelector(errorSelect);

	const onChangePriorityFilter = useCallback(() => {
		dispatch(setPriorityFilter());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getTasksTC());
	}, [dispatch]);

	return (
		<S.Todolist>
			<S.Title>Todolist</S.Title>
			<CreateTaskForm />
			{tasksStatus === "loading" ? (
				<div>
					<TaskSkeleton />
					<TaskSkeleton />
					<TaskSkeleton />
				</div>
			) : (
				<TasksList />
			)}
			<FlexWrapper wrap='wrap' justify='space-between'>
				<S.CountInfo>Active tasks: {count}</S.CountInfo>
				<Filters />
				<Button onClick={onChangePriorityFilter}>
					<span>Priority</span>
					<S.ArrowOrder $priorityFilter={priorityFilter}>
						<Arrow size={20} color='#5c7282' />
					</S.ArrowOrder>
				</Button>
			</FlexWrapper>
			{tasksError ? <Toast message={tasksError || ""} /> : null}
		</S.Todolist>
	);
});
