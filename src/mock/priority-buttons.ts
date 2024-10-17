import { EPriorities } from "../store/reducers/tasks-reducer";

export const priorityButtons: TPriorityButton[] = [
	{
		id: 0,
		title: "low",
		name: "priority",
		value: 0,
	},
	{
		id: 1,
		title: "medium",
		name: "priority",
		value: 1,
	},
	{
		id: 2,
		title: "high",
		name: "priority",
		value: 2,
	},
];

type TPriorityButton = {
	id: number;
	title: string;
	name: string;
	value: EPriorities;
};
