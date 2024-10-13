import { Task } from "./task/task";
import styled from "styled-components";
import { useAppSelector } from "../../../store/store";
import { filterSelect, priorityFilterSelect, tasksSelect } from "../../../store/selectors/tasks-selectors";
import { TTask } from "../../../store/reducers/tasks-reducer";

export const TasksList = () => {
	const tasks = useAppSelector(tasksSelect);
	const priorityFilter = useAppSelector(priorityFilterSelect);
	const currentFilter = useAppSelector(filterSelect);

	const filteredTasks = () => {
		let filteredAndSortedTasks: TTask[] = [];
		switch (currentFilter) {
			case "active":
				filteredAndSortedTasks = tasks.filter(t => !t.isDone);
				break;
			case "completed":
				filteredAndSortedTasks = tasks.filter(t => t.isDone);
				break;
			default:
				filteredAndSortedTasks = tasks;
				break;
		}
		return filteredAndSortedTasks.sort(({ priority: a }, { priority: b }) =>
			priorityFilter === "asc" ? b - a : a - b
		);
	};

	return (
		<STaskList>
			{filteredTasks()?.map(t => (
				<Task key={t.id} task={t} />
			))}
		</STaskList>
	);
};

export const STaskList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	margin-bottom: 20px;
`;
