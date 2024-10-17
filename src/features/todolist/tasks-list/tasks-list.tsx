import { Task } from "./task/task";
import { useAppSelector } from "../../../store/store";
import { filterSelect, priorityFilterSelect, tasksSelect } from "../../../store/selectors/tasks-selectors";
import { TTaskResponse } from "../../../store/reducers/tasks-reducer";
import { S } from "./tasks-list.styled";

export const TasksList = () => {
	const tasks = useAppSelector(tasksSelect);
	const priorityFilter = useAppSelector(priorityFilterSelect);
	const currentFilter = useAppSelector(filterSelect);

	const filteredTasks = () => {
		let filteredAndSortedTasks: TTaskResponse[] = [];
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
		<S.TaskList>
			{filteredTasks().length ? (
				filteredTasks().map(t => <Task key={t.id} task={t} />)
			) : (
				<S.EmptyList>Список пуст</S.EmptyList>
			)}
		</S.TaskList>
	);
};
