import { ChangeEvent, FC, ReactNode, useState } from "react";
import { TextField } from "../text-field/text-field";
import styled from "styled-components";
import { RequestStatusType } from "../../store/reducers/tasks-reducer";

type TEditableTitleProps = {
	children: ReactNode;
	onUpdateTitle: () => void;
	onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	taskTitle: string;
	taskStatus: RequestStatusType;
};

export const EditableTitle: FC<TEditableTitleProps> = ({
	taskStatus,
	taskTitle,
	onUpdateTitle,
	onHandleChange,
	children,
}) => {
	const [isEdited, setIsEdited] = useState(false);

	const onHandleFocus = () => {
		if (taskStatus === "loading") return;
		setIsEdited(true);
	};

	const onHandleBlur = () => {
		setIsEdited(false);
		onUpdateTitle();
	};

	return (
		<SEditableTitle>
			<span onDoubleClick={onHandleFocus}>
				{isEdited ? (
					<TextField onChange={onHandleChange} value={taskTitle} onBlur={onHandleBlur} autoFocus />
				) : (
					children
				)}
			</span>
		</SEditableTitle>
	);
};

export const SEditableTitle = styled.div`
	cursor: pointer;
`;
