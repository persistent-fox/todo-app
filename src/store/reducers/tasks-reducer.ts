import { Dispatch } from "redux";
import { tasksAPI } from "../../api/tasks-api";

const initialState: TTasksState = {
	tasks: [],
	filter: "all",
	priorityFilter: "asc",
};

export const tasksReducer = (state = initialState, { type, payload }: TActions): TTasksState => {
	switch (type) {
		case "TASKS/SET-TASKS":
			return { ...state, tasks: payload.tasks };
		case "TASKS/ADD-TASK":
			return state;
		case "TASKS/DELETE-TASK":
			return state;
		case "TASKS/UPDATE-TASK":
			return {
				...state,
				tasks: state.tasks.map(t => (t.id === payload.task.id ? { ...payload.task } : t)),
			};
		case "TASKS/SET-FILTER":
			return { ...state, filter: payload.filter };
		case "TASKS/SET-PRIORITY-FILTER":
			return { ...state, priorityFilter: state.priorityFilter === "desc" ? "asc" : "desc" };
		default:
			return state;
	}
};

//actions
export const setTasks = (tasks: TTask[]) =>
	({
		type: "TASKS/SET-TASKS",
		payload: { tasks },
	} as const);

export const addTask = (taskTitle: string) =>
	({
		type: "TASKS/ADD-TASK",
		payload: { taskTitle },
	} as const);

export const deleteTask = (taskId: string) =>
	({
		type: "TASKS/DELETE-TASK",
		payload: { taskId },
	} as const);

export const createTask = (title: string) =>
	({
		type: "TASKS/CREATE-TASK",
		payload: { title },
	} as const);

export const updateTask = (task: TTask) =>
	({
		type: "TASKS/UPDATE-TASK",
		payload: { task },
	} as const);

export const setFilter = (filter: TFilters) =>
	({
		type: "TASKS/SET-FILTER",
		payload: { filter },
	} as const);

export const setPriorityFilter = () =>
	({
		type: "TASKS/SET-PRIORITY-FILTER",
		payload: {},
	} as const);

//thunks

export const getTasksTC = () => (dispatch: Dispatch) => {
	tasksAPI.getTasks().then(res => dispatch(setTasks(res.data)));
};

export const addTasksTC = (task: TTask) => (dispatch: Dispatch) => {
	tasksAPI.createTask(task).then(res => dispatch(addTask(res.data)));
};

export const updateTaskTC = (task: TTask) => (dispatch: Dispatch) => {
	tasksAPI.updateTask(task).then(res => dispatch(updateTask(res.data)));
};

//types

type TTasksState = {
	tasks: TTask[];
	filter: TFilters;
	priorityFilter: TSortOrder;
};

export type TTask = {
	id: string;
	title: string;
	isDone: boolean;
	priority: TPriorities;
};

export type TPriorities = 0 | 1 | 2;
export type TSortOrder = "asc" | "desc";
export type TFilters = "all" | "completed" | "active";

type TActions = TSetTasks | TAddTask | TUpdateTask | TDeleteTask | TSetFilter | TSetPriorityFilter;

export type TSetTasks = ReturnType<typeof setTasks>;
export type TAddTask = ReturnType<typeof addTask>;
export type TUpdateTask = ReturnType<typeof updateTask>;
export type TDeleteTask = ReturnType<typeof deleteTask>;
export type TSetFilter = ReturnType<typeof setFilter>;
export type TSetPriorityFilter = ReturnType<typeof setPriorityFilter>;
