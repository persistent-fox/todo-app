import axios from "axios";
import { TTask } from "../store/reducers/tasks-reducer";

const instance = axios.create({
	baseURL: "https://670b80e9ac6860a6c2cc388a.mockapi.io/todo-app",
});

export const tasksAPI = {
	getTasks() {
		return instance.get<TTask[]>("/tasks");
	},
	createTask(task: TTask) {
		return instance.post("/tasks", task);
	},
	updateTask(task: TTask) {
		return instance.put(`/tasks/${task.id}`, task);
	},
	deleteTask(taskId: string) {
		return instance.delete(`/tasks/${taskId}`);
	},
};
