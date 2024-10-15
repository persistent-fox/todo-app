import axios from "axios";
import { TTask, TTaskResponse } from "../store/reducers/tasks-reducer";

const instance = axios.create({
	baseURL: "https://670b80e9ac6860a6c2cc388a.mockapi.io/todo-app",
});

export const tasksAPI = {
	getTasks() {
		return instance.get<TTaskResponse[]>("/tasks");
	},
	createTask(task: TTask) {
		return instance.post<TTaskResponse>("/tasks", task);
	},
	updateTask(taskId: string, task: TTask) {
		return instance.put<TTaskResponse>(`/tasks/${taskId}`, task);
	},
	deleteTask(taskId: string) {
		return instance.delete(`/tasks/${taskId}`);
	},
};
