import { TRootState } from "../store";

export const tasksSelect = (state: TRootState) => state.tasks.tasks;
export const filterSelect = (state: TRootState) => state.tasks.filter;
export const priorityFilterSelect = (state: TRootState) => state.tasks.priorityFilter;
export const activeTasksCount = (state: TRootState) => state.tasks.tasks.filter(t => !t.isDone).length;
export const tasksStatusSelect = (state: TRootState) => state.tasks.status;
export const errorSelect = (state: TRootState) => state.tasks.error;
