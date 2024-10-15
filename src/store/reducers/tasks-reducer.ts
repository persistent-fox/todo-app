import { Dispatch } from "redux";
import { tasksAPI } from "../../api/tasks-api";

const initialState: TTasksState = {
	tasks: [],
	filter: "all",
	priorityFilter: "asc",
	status: "idle",
	error: null,
};

export const tasksReducer = (state = initialState, { type, payload }: TActions): TTasksState => {
	switch (type) {
		case "TASKS/SET-TASKS":
			return { ...state, tasks: payload.tasks.map(t => ({ ...t, status: "idle" })) };
		case "TASKS/ADD-TASK":
			return { ...state, tasks: [payload.task, ...state.tasks] };
		case "TASKS/DELETE-TASK":
			return { ...state, tasks: state.tasks.filter(t => t.id !== payload.taskId) };
		case "TASKS/UPDATE-TASK":
			return {
				...state,
				tasks: state.tasks.map(t => (t.id === payload.task.id ? { ...payload.task } : t)),
			};
		case "TASKS/SET-FILTER":
			return { ...state, filter: payload.filter };
		case "TASKS/SET-PRIORITY-FILTER":
			return { ...state, priorityFilter: state.priorityFilter === "desc" ? "asc" : "desc" };
		case "TASKS/SET-TASKS-STATUS":
			return { ...state, status: payload.status };

		case "TASKS/SET-TASKS-ERROR":
			return { ...state, error: payload.error };
		case "TASKS/SET-TASK-STATUS":
			return {
				...state,
				tasks: state.tasks.map(t => (t.id === payload.taskId ? { ...t, status: payload.status } : t)),
			};

		case "TASKS/SET-TASK-ERROR":
			return {
				...state,
				tasks: state.tasks.map(t => (t.id === payload.taskId ? { ...t, error: payload.error } : t)),
			};
		default:
			return state;
	}
};

//actions
export const setTasks = (tasks: TTaskResponse[]) =>
	({
		type: "TASKS/SET-TASKS",
		payload: { tasks },
	} as const);

export const addTask = (task: TTaskResponse) => {
	return {
		type: "TASKS/ADD-TASK",
		payload: { task },
	} as const;
};

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

export const updateTask = (task: TTaskResponse) =>
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

export const setTasksStatus = (status: RequestStatusType) =>
	({
		type: "TASKS/SET-TASKS-STATUS",
		payload: { status },
	} as const);

export const setTasksError = (error: string | null) =>
	({
		type: "TASKS/SET-TASKS-ERROR",
		payload: { error },
	} as const);

export const setTaskStatus = (taskId: string, status: RequestStatusType) =>
	({
		type: "TASKS/SET-TASK-STATUS",
		payload: { taskId, status },
	} as const);

export const setTaskError = (taskId: string, error: string | null) =>
	({
		type: "TASKS/SET-TASK-ERROR",
		payload: { taskId, error },
	} as const);

//thunks
export const getTasksTC = () => (dispatch: Dispatch) => {
	dispatch(setTasksStatus("loading"));
	tasksAPI
		.getTasks()
		.then(res => {
			dispatch(setTasksStatus("succeeded"));
			return dispatch(setTasks(res.data));
		})
		.catch(e => {
			dispatch(setTasksStatus("failed"));
			dispatch(setTasksError("Something went wrong"));
		});
};

export const addTasksTC = (task: TTask) => (dispatch: Dispatch) => {
	dispatch(setTasksError(null));
	tasksAPI
		.createTask(task)
		.then(res => {
			dispatch(addTask(res.data));
		})
		.catch(e => {
			dispatch(setTasksStatus("failed"));
			dispatch(setTasksError("Failed to create task"));
		});
};

export const updateTaskTC = (taskId: string, task: TTask) => (dispatch: Dispatch) => {
	dispatch(setTaskStatus(taskId, "loading"));
	dispatch(setTaskError(taskId, null));
	return tasksAPI
		.updateTask(taskId, task)
		.then(res => {
			dispatch(setTaskStatus(taskId, "succeeded"));
			dispatch(updateTask(res.data));
		})
		.catch(e => {
			dispatch(setTaskStatus(taskId, "failed"));
			dispatch(setTaskError(taskId, "Failed to update task"));
			throw new Error("");
		});
};

export const deleteTaskTC = (taskId: string) => (dispatch: Dispatch) => {
	dispatch(setTaskStatus(taskId, "loading"));

	tasksAPI
		.deleteTask(taskId)
		.then(res => {
			dispatch(deleteTask(taskId));
		})
		.catch(e => {
			dispatch(setTaskStatus(taskId, "failed"));
			dispatch(setTaskError(taskId, "Failed to delete task"));
		});
};

//types
export type TTasksState = {
	tasks: TTaskResponse[];
	filter: TFilters;
	priorityFilter: TSortOrder;
	status: RequestStatusType;
	error: string | null;
};

export type TTaskResponse = {
	id: string;
	title: string;
	isDone: boolean;
	priority: EPriorities;
	status: RequestStatusType;
	error: string | null;
	avatar: string;
	createdAt: string;
	name: string;
};

export type TTask = {
	title: string;
	isDone: boolean;
	priority: EPriorities;
	status: RequestStatusType;
	error: string | null;
};

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";

export enum EPriorities {
	Low = 0,
	Medium = 1,
	High = 2,
}
export type TSortOrder = "asc" | "desc";
export type TFilters = "all" | "completed" | "active";

type TActions =
	| TSetTasks
	| TAddTask
	| TUpdateTask
	| TDeleteTask
	| TSetFilter
	| TSetPriorityFilter
	| TSetTasksStatus
	| TSetTasksError
	| TSetTaskStatus
	| TSetTaskError;

export type TSetTasks = ReturnType<typeof setTasks>;
export type TAddTask = ReturnType<typeof addTask>;
export type TUpdateTask = ReturnType<typeof updateTask>;
export type TDeleteTask = ReturnType<typeof deleteTask>;
export type TSetFilter = ReturnType<typeof setFilter>;
export type TSetPriorityFilter = ReturnType<typeof setPriorityFilter>;
export type TSetTasksStatus = ReturnType<typeof setTasksStatus>;
export type TSetTasksError = ReturnType<typeof setTasksError>;
export type TSetTaskStatus = ReturnType<typeof setTaskStatus>;
export type TSetTaskError = ReturnType<typeof setTaskError>;
