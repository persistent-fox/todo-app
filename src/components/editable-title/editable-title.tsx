import { ChangeEvent, FC, ReactNode, useState } from "react";
import { TextField } from "../text-field/text-field";
import styled from "styled-components";

type TEditableTitleProps = {
	children: ReactNode;
	onUpdateTitle: () => void;
	onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	taskTitle: string;
};

export const EditableTitle: FC<TEditableTitleProps> = ({ taskTitle, onUpdateTitle, onHandleChange, children }) => {
	const [isEdited, setIsEdited] = useState(false);

	const onHandleFocus = () => {
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
