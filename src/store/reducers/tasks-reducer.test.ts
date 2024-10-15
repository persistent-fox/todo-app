import {
	addTask,
	deleteTask,
	EPriorities,
	RequestStatusType,
	setFilter,
	setPriorityFilter,
	setTaskError,
	setTaskStatus,
	tasksReducer,
	TFilters,
	TTaskResponse,
	TTasksState,
	updateTask,
} from "./tasks-reducer";

export const s = {};

describe("tasksReducer", () => {
	let startState: TTasksState;
	beforeEach(() => {
		startState = {
			tasks: [],
			filter: "all",
			priorityFilter: "asc",
			status: "idle",
			error: null,
		};
	});

	it("correct task should be added", () => {
		const newTask: TTaskResponse = {
			id: "1",
			title: "task 1",
			isDone: false,
			priority: EPriorities.Low,
			status: "idle",
			error: null,
			avatar: "",
			createdAt: "",
			name: "",
		};
		const action = addTask(newTask);
		const endState = tasksReducer(startState, action);

		expect(endState.tasks.length).toBe(1);
		expect(endState.tasks[0].title).toBe("task 1");
	});

	it("correct task should be deleted", () => {
		startState.tasks = [
			{
				id: "1",
				title: "task 1",
				isDone: false,
				priority: EPriorities.Low,
				status: "idle",
				error: null,
				avatar: "",
				createdAt: "",
				name: "",
			},
			{
				id: "2",
				title: "task 2",
				isDone: false,
				priority: EPriorities.Low,
				status: "idle",
				error: null,
				avatar: "",
				createdAt: "",
				name: "",
			},
		];
		const action = deleteTask("2");
		const endState = tasksReducer(startState, action);

		expect(endState.tasks.length).toBe(1);
		expect(endState.tasks[1].id).toBe("1");
	});

	it("correct task should be updated", () => {
		startState.tasks = [
			{
				id: "1",
				title: "task 1",
				isDone: false,
				priority: EPriorities.Low,
				status: "idle",
				error: null,
				avatar: "",
				createdAt: "",
				name: "",
			},
			{
				id: "2",
				title: "task 2",
				isDone: false,
				priority: EPriorities.Low,
				status: "idle",
				error: null,
				avatar: "",
				createdAt: "",
				name: "",
			},
		];

		const updatedTask: TTaskResponse = {
			id: "1",
			title: "new title",
			isDone: true,
			priority: EPriorities.Low,
			status: "idle",
			error: null,
			avatar: "",
			createdAt: "",
			name: "",
		};
		const action = updateTask(updatedTask);
		const endState = tasksReducer(startState, action);

		expect(endState.tasks.length).toBe(2);
		expect(endState.tasks[0].id).toBe("1");
		expect(endState.tasks[0].isDone).toBeTruthy();
		expect(endState.tasks[0].title).toBe("new title");
	});

	it("should set correct error for task", () => {
		startState.tasks = [
			{
				id: "1",
				title: "task 1",
				isDone: false,
				priority: EPriorities.Low,
				status: "idle",
				error: null,
				avatar: "",
				createdAt: "",
				name: "",
			},
			{
				id: "2",
				title: "task 2",
				isDone: false,
				priority: EPriorities.Low,
				status: "idle",
				error: null,
				avatar: "",
				createdAt: "",
				name: "",
			},
		];
		const errorMessage = "Some error";

		const action = setTaskError("1", errorMessage);
		const endState = tasksReducer(startState, action);

		expect(endState.tasks[0].error).toBe("Some error");
		expect(endState.tasks[1].error).toBe(null);
		expect(endState.error).toBe(null);
	});

	it("should set correct status for task", () => {
		startState.tasks = [
			{
				id: "1",
				title: "task 1",
				isDone: false,
				priority: EPriorities.Low,
				status: "idle",
				error: null,
				avatar: "",
				createdAt: "",
				name: "",
			},
			{
				id: "2",
				title: "task 2",
				isDone: false,
				priority: EPriorities.Low,
				status: "idle",
				error: null,
				avatar: "",
				createdAt: "",
				name: "",
			},
		];
		const newStatus: RequestStatusType = "loading";

		const action = setTaskStatus("1", newStatus);
		const endState = tasksReducer(startState, action);

		expect(endState.tasks[0].status).toBe("loading");
		expect(endState.tasks[1].status).toBe("idle");
		expect(endState.error).toBe("idle");
	});

	it("should set correct filter for tasks", () => {
		const newFilter: TFilters = "completed";

		const action = setFilter(newFilter);
		const endState = tasksReducer(startState, action);

		expect(endState.filter).toBe("completed");
	});

	it("should toggle priorityFilter for tasks", () => {
		const action = setPriorityFilter();
		let endState = tasksReducer(startState, action);

		expect(endState.priorityFilter).toBe("desc");

		endState = tasksReducer(startState, action);

		expect(endState.priorityFilter).toBe("asc");
	});
});
