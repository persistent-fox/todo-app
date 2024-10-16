import { ChangeEvent, FC, memo, useState } from "react";
import { Checkbox } from "../../../../components/checkbox/checkbox";
import { Flag } from "../../../../components/icons";
import { deleteTaskTC, TTaskResponse, updateTaskTC } from "../../../../store/reducers/tasks-reducer";
import { EditableTitle } from "../../../../components/editable-title/editable-title";
import { useAppDispatch } from "../../../../store/store";
import { Loader } from "../../../../components/styled/loader";
import { Trash } from "../../../../components/icons/trash";
import { S } from "./task.styled";
import { Toast } from "../../../../components/toast/toast";

type TTaskProps = {
	task: TTaskResponse;
};

export const Task: FC<TTaskProps> = memo(({ task }) => {
	const [title, setTitle] = useState(task.title);

	const dispatch = useAppDispatch();
	const onChangeStatus = (event: ChangeEvent<HTMLInputElement>) => {
		if (task.status === "loading") return;
		dispatch(updateTaskTC(task.id, { ...task, isDone: event.target.checked })).catch();
	};

	const onUpdateTitle = () => {
		if (task.title !== title && title.trim().length > 4) {
			// так как dispatch возвращает промис, поэтому я добавила catch в случае ошибки на сервере, чтобы вернуть title неизмененным
			dispatch(updateTaskTC(task.id, { ...task, title })).catch(() => setTitle(task.title));
		} else {
			setTitle(task.title);
		}
	};

	const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newTitle = e.target.value;
		setTitle(newTitle);
	};

	const onDeleteTask = () => {
		if (task.status === "loading") return;
		dispatch(deleteTaskTC(task.id));
	};

	return (
		<S.Task $disabled={task.status}>
			{task.status === "loading" ? (
				<S.Loading>
					<Loader size={16} color='#e8e8e8' />
				</S.Loading>
			) : null}
			<Checkbox disabled={task.status === "loading"} checked={task.isDone} onChange={onChangeStatus} />
			<EditableTitle
				taskStatus={task.status}
				onHandleChange={onHandleChange}
				onUpdateTitle={onUpdateTitle}
				taskTitle={title}
			>
				<S.Title $isDone={task.isDone}>{title}</S.Title>
			</EditableTitle>
			<S.Priority $priority={task.priority}>
				<Flag size={20} />
			</S.Priority>
			<S.DeleteButton onClick={onDeleteTask}>
				<Trash size={20} />
			</S.DeleteButton>
			{task.error ? <Toast message={task.error || ""} /> : null}
		</S.Task>
	);
});
