import { EPriorities } from "../store/reducers/tasks-reducer";

export function isTPriority(value: number): value is EPriorities {
	return [0, 1, 2].includes(value);
}
