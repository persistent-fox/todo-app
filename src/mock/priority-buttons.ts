import { TPriorities } from "../store/reducers/tasks-reducer";

export const priorityButtons: TPriorityButton[] = [
	{
		id: 0,
		title: "низкий",
		name: "priority",
		value: 0,
	},
	{
		id: 1,
		title: "средний",
		name: "priority",
		value: 1,
	},
	{
		id: 2,
		title: "высокий",
		name: "priority",
		value: 2,
	},
];

type TPriorityButton = {
	id: number;
	title: string;
	name: string;
	value: TPriorities;
};
