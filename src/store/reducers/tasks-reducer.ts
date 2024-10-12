import { v1 } from "uuid";

const initialState: Record<string, TTask[]> = {
	[v1()]: [],
	[v1()]: [],
};

export const tasksReducer = (state: any = initialState, action: TActions): any => {
	switch (action.type) {
		case "TASKS/ADD-TASK":
			return state;

		default:
			return state;
	}
};

export const addTask = (todolistId: string, taskTitle: string) =>
	({
		type: "TASKS/ADD-TASK",
		payload: { todolistId, taskTitle },
	} as const);

//types

export type TTask = {
	id: string;
	title: string;
	isDone: boolean;
	priority: TPriorities;
};

export type TPriorities = "low" | "medium" | "high";

type TActions = TAddTask;

export type TAddTask = ReturnType<typeof addTask>;
