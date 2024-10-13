import { TFilters } from "../store/reducers/tasks-reducer";

export const tasksFilters: TTasksFilter[] = [
	{
		id: 1,
		title: "All",
		filter: "all",
	},
	{
		id: 2,
		title: "Active",
		filter: "active",
	},
	{
		id: 3,
		title: "Completed",
		filter: "completed",
	},
];

type TTasksFilter = {
	id: number;
	title: string;
	filter: TFilters;
};
