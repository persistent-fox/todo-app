import { TPriorities } from "../store/reducers/tasks-reducer";

export function isTPriority(value: number): value is TPriorities {
	return [0, 1, 2].includes(value);
}
